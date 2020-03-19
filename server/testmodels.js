/** @format */

import {
  News,
  Banners,
  Reviews,
  Products,
  Languages,
  Posts
} from "../imports/api/schemas";
import "../imports/startups/publish";
import {
  InsertNews,
  InsertLanguage,
  InsertReviews,
  InsertProduct,
  InsertPosts,
  TestUpdatePostImage,
  InsertBanner,
  BannerLanguageUpdate
} from "./db";

const runDebugModels = () => {
  News.remove({});
  if (News.find({}).count() < 3) {
    InsertNews(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "http://fashion27.com/wp-content/uploads/2019/02/Men-s-Casual-Running-Shoes-Fashion-Sneakers-Outdoor-Comfortable-Popular-Leisure-Shoes-Brand-High-Quality-Non-1.jpg"
    );
    InsertNews(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "https://www.polar.com/sites/default/files/sc/running-index-intro-bg-desktop.jpg"
    );
    InsertNews(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
    InsertNews(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
  }
  Reviews.remove({});
  if (Reviews.find({}).count() < 3) {
    InsertReviews(
      "Tadjaoki Nabukagava",
      "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?",
      4,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
    InsertReviews(
      "Fill Carlsom",
      "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?",
      3,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
    InsertReviews(
      "Irod Rakish",
      "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?",
      5,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
    InsertReviews(
      "Irod Rakish",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?",
      2,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP"
    );
  }
  Products.remove({});
  if (Products.find({}).count() < 8) {
    InsertProduct(
      "CM v1",
      80,
      0,
      49436582336,
      "man",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/shoes-7_h3texr.png"
    );
    InsertProduct(
      "CM v23",
      20,
      0,
      49436582336,
      "woman",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/shoes-8_l6rmlq.png"
    );
    InsertProduct(
      "CM v435",
      30,
      0,
      49436582336,
      "kids",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/shoes-6_g4s620.png"
    );
    InsertProduct(
      "Nike Jordan",
      80,
      50,
      49436582336,
      "man",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617433/copVSMed/shoes-9_lrwbdi.png"
    );
    InsertProduct(
      "CM v4872",
      80,
      20,
      49436582336,
      "man",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617433/copVSMed/shoes-12_iedlmf.png"
    );
    InsertProduct(
      "CM vXXX",
      60,
      15,
      49436582336,
      "man/woman",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617433/copVSMed/shoes-10_wsznkp.png"
    );
    InsertProduct(
      "CM vSMTH",
      80,
      0,
      49436582336,
      "woman",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617433/copVSMed/shoes-11_ushxgu.png"
    );
    InsertProduct(
      "CM vNew Suoer",
      66,
      10,
      49436582336,
      "man",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617433/copVSMed/shoes-13_b8li26.png"
    );
  }
  Posts.remove({});
  if (Posts.find({}).count() < 4) {
    InsertPosts(
      "test4",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-2_xjbi5k.png",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618026/copVSMed/cs-mens-hero-new-balance-102419_yrllvt.jpg"
    );

    TestUpdatePostImage(
      "test4",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618770/copVSMed/post-5_ywyg6v.png",
      2
    );

    TestUpdatePostImage(
      "test4",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-2_xjbi5k.png",
      4
    );

    InsertPosts(
      "test2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-3_anvtkc.png",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618287/copVSMed/912153-new-cool-shoes-wallpaper-hd-1920x1080-hd_nkudy5.jpg"
    );

    TestUpdatePostImage(
      "test2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618770/copVSMed/post-5_ywyg6v.png",
      2
    );

    TestUpdatePostImage(
      "test2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-2_xjbi5k.png",
      4
    );

    InsertPosts(
      "test1.1",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-3_anvtkc.png",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618302/copVSMed/download_icrrpm.jpg"
    );

    TestUpdatePostImage(
      "test1.1",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618770/copVSMed/post-5_ywyg6v.png",
      2
    );

    TestUpdatePostImage(
      "test1.1",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-2_xjbi5k.png",
      4
    );

    InsertPosts(
      "test1.2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-4_hgaqsl.png",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618329/copVSMed/air-jordan-shoes-desktop-wallpapers-hd-wallpapers-desktop-images-download-windows-wallpapers-amazing-colourful-4k-picture-artwork-1920x1080_nseao0.jpg"
    );

    TestUpdatePostImage(
      "test1.2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573618770/copVSMed/post-5_ywyg6v.png",
      2
    );

    TestUpdatePostImage(
      "test1.2",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/v1573617434/copVSMed/post-2_xjbi5k.png",
      4
    );
  }

  Banners.remove({});
  if (Banners.find({}).count() < 1) {
    InsertBanner(
      "CM v1",
      "8 variants",
      "From $80.00",
      "Since this is our favorite sneaker, we’re bringing you 50 variants to suit everyone’s needs.",
      "Browse more",
      "https://res.cloudinary.com/avilonproductioncdn/image/upload/c_scale,h_549/v1573619447/copVSMed/28530-3-nike-shoes-transparent_qozdw8.png"
    );
    BannerLanguageUpdate(
      "CM v1",
      "ru",
      "СМ вер.1",
      "8 вариантов",
      "От 80$",
      "Так как это наши любимые кроссовки, мы предлагаем вам 50 вариантов для удовлетворения потребностей каждого.",
      "Еще"
    );
  }
  Languages.remove({});
  if (Languages.find({}).count() < 4) {
    InsertLanguage("en", "/translations/enlang.json");
    InsertLanguage("ru", "/translations/rulang.json");
    InsertLanguage("es", "/translations/eslang.json");
    InsertLanguage("zh", "/translations/zhlang.json");
  }
};

export default runDebugModels;
