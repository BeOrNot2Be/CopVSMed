/** @format */

// eslint-disable-next-line import/no-unresolved
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const News = new Mongo.Collection("news");
export const Posts = new Mongo.Collection("posts");
export const Reviews = new Mongo.Collection("reviews");
export const Products = new Mongo.Collection("products");
export const Banners = new Mongo.Collection("banners");
export const Languages = new Mongo.Collection("languages");

const Months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

const currentDateString = () => {
  const currentDate = new Date();
  return `${
    Months[currentDate.getMonth()]
  } ${currentDate.getDay()}, ${currentDate.getFullYear()}`;
};

const NewsSchema = new SimpleSchema({
  name: {
    label: "Title",
    type: Object,
    blackbox: true
  },
  date: {
    label: "Created At",
    type: String,
    defaultValue: currentDateString()
  },
  img: {
    label: "Image Link",
    type: String
  },
  commentsNum: {
    label: "Comments",
    type: Number,
    defaultValue: 0
  }
});

const ReviewsSchema = new SimpleSchema({
  name: {
    label: "Title",
    type: Object,
    blackbox: true
  },
  text: {
    label: "text",
    type: Object,
    blackbox: true
  },
  img: {
    label: "Image Link",
    type: String
  },
  starsNum: {
    label: "Stars",
    type: Number,
    defaultValue: 0
  }
});

const ProductsSchema = new SimpleSchema({
  name: {
    label: "Title",
    type: Object,
    blackbox: true
  },
  img: {
    label: "Image Link",
    type: String
  },
  skuNum: {
    label: "Sku Number",
    type: Number
  },
  price: {
    label: "Price $",
    type: Number
  },
  sale: {
    label: "Sale %",
    type: Number
  },
  gender: {
    label: "Gander",
    type: Object,
    blackbox: true
  }
});

const PostsSchema = new SimpleSchema({
  name: {
    label: "Title",
    type: Object,
    blackbox: true
  },
  "name.en": {
    label: "Title",
    type: String,
    blackbox: true
  },
  img: {
    label: "Image Link",
    type: Object,
    blackbox: true
  }
});

const BannersSchema = new SimpleSchema({
  buttonText: {
    label: "Call to action text",
    type: Object,
    blackbox: true
  },
  desc: {
    label: "small desc of product",
    type: Object,
    blackbox: true
  },
  firstHeader: {
    label: "Main Header",
    type: Object,
    blackbox: true
  },
  secondHeader: {
    label: "Second Header",
    type: Object,
    blackbox: true
  },
  thirdHeader: {
    label: "Third Header",
    type: Object,
    blackbox: true
  },
  img: {
    label: "Image Link",
    type: String
  }
});

const LanguagesSchema = new SimpleSchema({
  sign: {
    label: "Language browser code",
    type: String
  },
  url: {
    label: "Language scheme url",
    type: String
  }
});

News.attachSchema(NewsSchema);
Reviews.attachSchema(ReviewsSchema);
Products.attachSchema(ProductsSchema);
Posts.attachSchema(PostsSchema);
Banners.attachSchema(BannersSchema);
Languages.attachSchema(LanguagesSchema);
