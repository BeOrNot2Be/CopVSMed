import { combineReducers } from 'redux'
import PostsReducer from './postsReducer';
import newsReducer from './newsReducer';
//import PostsReducer from './postsReducer';
//import PostsReducer from './postsReducer';

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
  postsElement: PostsReducer,
  newsElement: newsReducer,
  //bannersElement: PostsReducer,
  //reviewsElement: PostsReducer,
  //productsElement: PostsReducer,
});

export default rootReducer;
