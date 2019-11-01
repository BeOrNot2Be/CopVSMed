import { Meteor } from 'meteor/meteor';
import {
  News, Banners, Reviews, Products, Languages, Posts,
} from '../imports/api/schemas';
import '../imports/startups/publish';
import {
  InsertNews, InsertLanguage, InsertReviews, InsertProduct,
  InsertPosts, TestUpdatePostImage, InsertBanner,
} from './db';

Meteor.startup(() => {
  News.remove({});
  if (News.find({}).count() < 3) {
    InsertNews('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP');
    InsertNews('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP');
    InsertNews('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP');
    InsertNews('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP');
  }
  Reviews.remove({});
  if (Reviews.find({}).count() < 3) {
    InsertReviews(
      'Tadjaoki Nabukagava',
      '1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      4,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
    InsertReviews(
      'Fill Carlsom',
      '2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      3,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
    InsertReviews(
      'Irod Rakish',
      '3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      5,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
    InsertReviews(
      'Irod Rakish',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      2,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
  }
  Products.remove({});
  if (Products.find({}).count() < 8) {
    let count = 8;
    while (count >= 0) {
      InsertProduct(
        `CM v${count}`,
        80,
        0,
        49436582336,
        'man',
        'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      );
      count -= 1;
    }
  }
  Posts.remove({});
  if (Posts.find({}).count() < 4) {
    InsertPosts(
      'test4',
      'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/Aspect-ratio-photography-ras-ul-had-beach-Oman-1.jpg',
      'https://images.wallpaperscraft.com/image/bird_silhouette_vector_134154_1920x1080.jpg'
    );
    
    TestUpdatePostImage(
      'test4',
      'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
      2,
    );
    
    TestUpdatePostImage(
      'test4',
      'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
      4,
    );

    InsertPosts(
      'test2',
      'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/Aspect-ratio-photography-ras-ul-had-beach-Oman-1.jpg',
      'https://wallpaperplay.com/walls/full/a/9/9/3080.jpg'
    );

    TestUpdatePostImage(
      'test2',
      'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
      2,
    );

    TestUpdatePostImage(
      'test2',
      'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
      4,
    );

    InsertPosts(
      'test1.1',
      'http://digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg',
      'https://images.wallpaperscraft.com/image/astronaut_spacesuit_butterflies_121755_1920x1080.jpg'
    );

    TestUpdatePostImage(
      'test1.1',
      'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
      2,
    );

    TestUpdatePostImage(
      'test1.1',
      'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
      4,
    );

    InsertPosts(
      'test1.2',
      'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/Aspect-ratio-photography-ras-ul-had-beach-Oman-1.jpg',
      'https://images8.alphacoders.com/926/thumb-1920-926492.jpg'
    );

    TestUpdatePostImage(
      'test1.2',
      'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
      2,
    );

    TestUpdatePostImage(
      'test1.2',
      'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
      4,
    );
  }

  Banners.remove({});
  if (Banners.find({}).count() < 1) {
    InsertBanner(
      'CM v1',
      '8 variants',
      'From $80.00',
      'Since this is our favorite sneaker, we’re bringing you 50 variants to suit everyone’s needs.',
      'Browse more',
      'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
    );
  }

  if (Languages.find({ sign: 'en' }).count() !== 1) {
    InsertLanguage('en');
  }
});
