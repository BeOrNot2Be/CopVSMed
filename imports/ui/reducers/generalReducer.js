import { CHANGE_LANG } from '../actions/general';

const initState = {
  lang: 'en',
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
    case CHANGE_LANG:
      if (state.lang === action.lang) {
        return state;
      } else {
        console.log(action);
        return { ...state, lang: action.lang };
      }

    default:
      return state;
  }
};

export default generalReducer;
