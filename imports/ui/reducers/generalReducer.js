import { Meteor } from 'meteor/meteor';
import { Languages } from '../../api/schemas';


const getInitLang = () => {
  let initLanguage = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'en-US';
  // eslint-disable-next-line prefer-destructuring
  initLanguage = initLanguage.split('-')[0];
  let subscribe = Meteor.subscribe('languages');
  const languages = Languages.find({ }, {}).fetch();
  console.log(languages);
  initLanguage = (initLanguage in languages) ? initLanguage : 'en';
  console.log(initLanguage);
  return initLanguage;
};

const initState = {
  lang: getInitLang(),
  user: {},
  cart: {
    items: [],
    sum: 0,
  },
  token: 'some token gen',
  postsElement: {},
  newsElement: {},
  bannersElement: {},
  reviewsElement: {},
  productsElement: {},
};


const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case '':
      return { ...state };

    default:
      return state;
  }
};

export default generalReducer;
