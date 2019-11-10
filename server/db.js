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

const newLangWrap = (lang, texts, originalObj) => {
  let newObj = originalObj;
  let newObjAns = {};
  for (let key of Object.keys(texts)) {
    newObj[key][lang] = texts[key];
    newObjAns[key] = newObj[key];
  }

  return newObjAns;
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
  const imgSize = `img.${size}`;
  Posts.update({ _id: id }, { $set: { imgSize: img } });
};

export const TestUpdatePostImage = (name, img, size) => {
  let postImg = Posts.findOne({ name: { en: name } }).img;
  postImg[size] = img;
  Posts.update({ name: { en: name } }, { $set: { img: postImg } });
};

export const InsertPosts = (name, img1, mob) => {
  const newPost = { img: { 1: img1, mob }, ...langWrapper({ name }) };
  Posts.insert(newPost);
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

export const InsertBanner = (firstHeader, secondHeader, thirdHeader, desc, buttonText, img) => {
  const newBanner = {
    img,
    ...langWrapper({
      firstHeader,
      secondHeader,
      thirdHeader,
      desc,
      buttonText,
    }),
  };

  Banners.insert(newBanner);
};

export const InsertLanguage = (sign, url) => {
  Languages.insert({ sign, url });
};

export const BannerLanguageUpdate = (firstHeaderEn, lang, firstHeader, secondHeader, thirdHeader, desc, buttonText) => {
  let banner = Banners.findOne({ firstHeader: { en: firstHeaderEn } });
  const newLangTexts = {
    firstHeader,
    secondHeader,
    thirdHeader,
    desc,
    buttonText,
  };

  banner = newLangWrap(lang, newLangTexts, banner);

  Banners.update({ firstHeader: { en: firstHeaderEn } }, { $set: { ...banner } });
};
