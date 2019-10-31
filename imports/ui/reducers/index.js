import { combineReducers } from 'redux'
import PostsReducer from './postsReducer';
import NewsReducer from './newsReducer';
import ReviewsReducer from './reviewsReducer';
import BannersReducer from './bannersReducer';
import ProductsReducer from './productsReducer';

let initLanguage = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'en-US';

if (initLanguage.includes('en')) initLanguage = 'en';

const initState = {
  lang: initLanguage,
  user: {},
  token: 'some token gen',
  postsElement: {},
  newsElement: {},
  bannersElement: {},
  reviewsElement: {},
  productsElement: {},
};

const generalReducer = (state = initState, action) => {
  return state;
};

const rootReducer = combineReducers({
  general: generalReducer,
  reviewsElement: ReviewsReducer,
  postsElement: PostsReducer,
  newsElement: NewsReducer,
  bannersElement: BannersReducer,
  productsElement: ProductsReducer,
});

export default rootReducer;
