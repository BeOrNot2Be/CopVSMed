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
      "New nike sport collection with zoom everywhere",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584494474/images/news%20background%20card%20imgs/Nike_353_native_1000_yar8ig.jpg"
    );
    InsertNews(
      "New version of adidas boost in new NMD sneakers",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584494474/images/news%20background%20card%20imgs/558026_v3_n0stuf.png"
    );
    InsertNews(
      "New nike middle sole technologies that will kill boost",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584494474/images/news%20background%20card%20imgs/Nike__175_native_1000_mjeysv.jpg"
    );
    InsertNews(
      "Adidas plan to go for 100% recycle shoes in next year",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584494474/images/news%20background%20card%20imgs/558546_jz9gdi.jpg"
    );
  }
  Reviews.remove({});
  if (Reviews.find({}).count() < 3) {
    InsertReviews(
      "Caren",
      "I absolutely love this site! I found out about it from the Ibotta app, and the combo of getting money back in that app, and the great deals from this website are great! I’ve bought about 5 pair of shoes from there so far and couldn’t say better things about them! The shipping takes a little longer since it’s ground, but I don’t have an issue with that!",
      4,
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584493220/images/reviews%20avatar%20imgs/review1_jcnukn.jpg"
    );
    InsertReviews(
      "Sophie",
      " couldn't find a specific dress shoe and had no luck until I found it here for a great price! I ordered the shoes and then looked at reviews the next day and was horrified with what I found. I figured I would wait the 3 days and make my own decision and they showed up today as promised. On time, right size, right color everything was as agreed. Thanks Shoes.com. I will be buying again soon.",
      4,
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584493219/images/reviews%20avatar%20imgs/review2_v2sf5h.jpg"
    );
    InsertReviews(
      "Emma",
      "The site is very carefully detailed and extremely easy to use. I like the division of the shoe manufacturers and the type of shoe you are looking for. Receipt and return of an item is easy and quick. No charge for shipping.",
      5,
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584493219/images/reviews%20avatar%20imgs/review4_cggs66.jpg"
    );
    InsertReviews(
      "MaCayla",
      "I have placed order for my first order. They came in the right size and in good condition. Seen from some reviews of unauthorised transaction, and I monitored the transaction on my card. There was no unauthorised transaction. Now I have placed order for another 2 pairs. Arrived in good condition and right size. Will consider to get more pairs from them. Cons: I find that their shipping is a little on the ex side.",
      5,
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584493219/images/reviews%20avatar%20imgs/review3_wu60kj.jpg"
    );
  }
  Products.remove({});
  if (Products.find({}).count() < 8) {
    InsertProduct(
      "Nike LeBron 17",
      100,
      50,
      49436582336,
      "MEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495553/images/products/shoes-13_b8li26_h05xrd.png"
    );
    InsertProduct(
      "Converse AllStars",
      40,
      0,
      49436582336,
      "WOMEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/products/shoes-6_g4s620_k0fvje.png"
    );
    InsertProduct(
      "Air Jordan 1 Low",
      30,
      0,
      49436582336,
      "MEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-8_l6rmlq_l2sxjg.png"
    );
    InsertProduct(
      "Jordan 13",
      80,
      0,
      49436582336,
      "MEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-7_h3texr_cpjkrb.png"
    );
    InsertProduct(
      "Adidas NMD 12",
      80,
      20,
      49436582336,
      "MEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-9_lrwbdi_ktwxjp.png"
    );
    InsertProduct(
      "Converse High Top",
      60,
      0,
      49436582336,
      "MEN / WOMEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-12_iedlmf_o63hwt.png"
    );
    InsertProduct(
      "Nike Air Force",
      80,
      0,
      49436582336,
      "WOMEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-10_wsznkp_lnn8kq.png"
    );
    InsertProduct(
      "Adidas Superstar",
      60,
      25,
      49436582336,
      "MEN",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495551/images/products/shoes-11_ushxgu_ptjs5t.png"
    );
  }
  Posts.remove({});
  if (Posts.find({}).count() < 4) {
    InsertPosts(
      "NikeKyrie",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-2_xjbi5k_ajpv3b.png",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584522437/images/posts%20images/post2_khxnis.png"
    );

    TestUpdatePostImage(
      "NikeKyrie",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-5_ywyg6v_ys8jq7.png",
      2
    );

    TestUpdatePostImage(
      "NikeKyrie",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-2_xjbi5k_ajpv3b.png",
      4
    );

    InsertPosts(
      "YeezeBoost",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-3_anvtkc_zbxach.png",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584522437/images/posts%20images/post_e0iepz.png"
    );

    TestUpdatePostImage(
      "YeezeBoost",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-5_ywyg6v_ys8jq7.png",
      2
    );

    TestUpdatePostImage(
      "YeezeBoost",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-2_xjbi5k_ajpv3b.png",
      4
    );

    InsertPosts(
      "FeelPremium",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-3_anvtkc_zbxach.png",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584524092/images/posts%20images/post4_hhaos3.png"
    );

    TestUpdatePostImage(
      "FeelPremium",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-5_ywyg6v_ys8jq7.png",
      2
    );

    TestUpdatePostImage(
      "FeelPremium",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-2_xjbi5k_ajpv3b.png",
      4
    );

    InsertPosts(
      "Athletes",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-4_hgaqsl_x1c6qm.png",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584524093/images/posts%20images/post3_dssg7k.png"
    );

    TestUpdatePostImage(
      "Athletes",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-5_ywyg6v_ys8jq7.png",
      2
    );

    TestUpdatePostImage(
      "Athletes",
      "https://res.cloudinary.com/dioqoihcx/image/upload/v1584495552/images/posts%20images/post-2_xjbi5k_ajpv3b.png",
      4
    );
  }

  Banners.remove({});
  if (Banners.find({}).count() < 1) {
    InsertBanner(
      "Nike Zoom 1",
      "8 variants",
      "From $80.00",
      "Since this is our favorite sneaker, we’re bringing you 8 variants to suit everyone’s needs.",
      "Browse more",
      "https://res.cloudinary.com/dioqoihcx/image/upload/c_scale,h_549/v1584495553/images/banner%20images/28530-3-nike-shoes-transparent_qozdw8_yxn7s2.png"
    );
    BannerLanguageUpdate(
      "Nike Zoom 1",
      "ru",
      "СМ вер.1",
      "8 вариантов",
      "От 80$",
      "Так как это наши любимые кроссовки, мы предлагаем вам 8 вариантов для удовлетворения потребностей каждого.",
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
