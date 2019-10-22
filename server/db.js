/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import {
  News, Banners, Reviews, Products, Languages, Posts,
} from '../imports/api/schemas';

const langWrapper = (texts) => {
  let wrappedTexts = {};

  for (let key of Object.keys(texts)) {
    wrappedTexts[key] = { en: texts[key] };
  }
  return { ...wrappedTexts };
};

export const InsertNews = (name, img) => {
  const newsPost = { img, ...langWrapper({ name }) };
  News.insert(newsPost);
};

export const InsertReviews = (name, text, starsNum, img) => {
  const newReview = { img, starsNum, ...langWrapper({ name, text }) };
  Reviews.insert(newReview);
};

export const UpdatePostImage = (id, img, size) => {
  Reviews.update({ _id: id }, {});
};

export const InsertPosts = (name, img) => {
  const newReview = { img: { 1: img }, ...langWrapper({ name }) };
  Reviews.insert(newReview);
};

export const InsertProduct = (name, price, sale, skuNum, gender, img) => {
  const newProduct = {
    img,
    price,
    sale,
    skuNum,
    ...langWrapper({ name, gender }),
  };
  Products.insert(newProduct);
};

export const InsertLanguage = (sign) => {
  Languages.insert({ sign });
};
