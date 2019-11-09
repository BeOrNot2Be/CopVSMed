import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import i18next from 'i18next';
import { Languages } from '../../api/schemas';

export const CHANGE_LANG = 'CHANGE_LANG';

export const getLang = () => {
  // return (dispatch) => {
  //   Tracker.autorun(() => {
  //     console.log('update');
  //     const subscribe = Meteor.subscribe('languages');
  //     const currLang = i18next.language;
  //     if (subscribe.ready()) {
  //       const langs = Languages.find({ }, {}).fetch().map((e) => e.sign);
  //       if (currLang !== undefined) {
  //         if (!(langs.includes(currLang))) {
  //           dispatch({ type: CHANGE_LANG, lang: 'en' });
  //           i18next.changeLanguage('en');
  //         } else {
  //           dispatch({ type: CHANGE_LANG, lang: i18next.language });
  //         }
  //       }
  //     }
  //   });
  // };
  console.log('treck lang update');
};
