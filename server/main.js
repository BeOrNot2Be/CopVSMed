import { Meteor } from 'meteor/meteor';
import {
  News, Banners, Reviews, Products, Languages, Posts,
} from '../imports/api/schemas';

import {
  InsertNews, InsertLanguage, InsertReviews, InsertProduct,
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
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      4,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
    InsertReviews(
      'Fill Carlsom',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
      3,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    );
    InsertReviews(
      'Irod Rakish',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
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
    console.log("insert test posts");
  }
  if (Languages.find({ sign: 'en' }).count() !== 1) {
    InsertLanguage('en');
  }
});
