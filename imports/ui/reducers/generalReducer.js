import { NEW_LANGUAGE_UPDATE } from '../actions/general';

const initState = {
  user: {},
  cart: {
    items: [],
    sum: 0,
  },
  langs: [],
  token: 'some token gen',
  postsElement: {},
  newsElement: {},
  bannersElement: {},
  reviewsElement: {},
  productsElement: {},
};


const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case NEW_LANGUAGE_UPDATE:
      return { ...state, langs: state.langs.concat([action.lang]) };

    default:
      return state;
  }
};

export default generalReducer;
