import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { setTranslations } from 'redux-i18n';
import { Languages } from '../../api/schemas';

export const NEW_LANGUAGE_UPDATE = 'NEW_LANGUAGE_UPDATE';


export const getTranslation = () => {
  return (dispatch) => {
    Tracker.autorun(() => {
      const subscription = Meteor.subscribe('languages');

      if (subscription.ready) {
        Languages.find({}).fetch().forEach((language) => {
          let lang = {};
          const callbackLangAssigning = (langObj) => {
            dispatch(setTranslations(langObj, { language: language.sign }));
            dispatch({ type: NEW_LANGUAGE_UPDATE, lang: language.sign });
          };

          fetch(language.url)
            .then((res) => res.json())
            .then((data) => { lang = data; })
            .then(() => callbackLangAssigning(lang))
            .catch((err) => {
              console.log("Error Reading data " + err);
            });
        });
      }
    });
  };
};
