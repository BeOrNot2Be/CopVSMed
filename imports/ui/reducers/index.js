/** @format */

import { combineReducers } from "redux";
import { i18nState } from "redux-i18n";
import PostsReducer from "./postsReducer";
import NewsReducer from "./newsReducer";
import ReviewsReducer from "./reviewsReducer";
import BannersReducer from "./bannersReducer";
import ProductsReducer from "./productsReducer";
import GeneralReducer from "./generalReducer";

const rootReducer = combineReducers({
  general: GeneralReducer,
  reviewsElement: ReviewsReducer,
  postsElement: PostsReducer,
  newsElement: NewsReducer,
  bannersElement: BannersReducer,
  productsElement: ProductsReducer,
  i18nState
});

export default rootReducer;
