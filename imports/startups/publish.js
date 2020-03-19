/** @format */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import { Meteor } from "meteor/meteor";
import {
  News,
  Banners,
  Reviews,
  Products,
  Languages,
  Posts
} from "../api/schemas";

if (Meteor.isServer) {
  Meteor.publish("newsAll", function() {
    // switch
    return News.find({});
  });

  Meteor.publish("newsAuth", function(auth) {
    // switch
    return News.find({});
  });

  Meteor.publish("newsGuest", function() {
    // switch
    return News.find({});
  });

  Meteor.publish("bannersAll", function() {
    // switch
    return Banners.find({});
  });

  Meteor.publish("bannersAuth", function(auth) {
    // switch
    return Banners.find({});
  });

  Meteor.publish("bannersGuest", function() {
    // switch
    return Banners.find({});
  });

  Meteor.publish("reviewsAll", function() {
    // switch
    return Reviews.find({});
  });

  Meteor.publish("reviewsAuth", function(auth) {
    // switch
    return Reviews.find({});
  });

  Meteor.publish("reviewsGuest", function() {
    // switch
    return Reviews.find({});
  });

  Meteor.publish("productsAll", function() {
    // switch
    return Products.find({});
  });

  Meteor.publish("productsAuth", function(auth) {
    // switch
    return Products.find({});
  });

  Meteor.publish("productsGuest", function() {
    // switch
    return Products.find({});
  });

  Meteor.publish("languages", function() {
    // switch
    return Languages.find({});
  });

  Meteor.publish("postsAll", function() {
    // switch
    return Posts.find({});
  });

  Meteor.publish("postsAuth", function(auth) {
    // switch
    return Posts.find({});
  });

  Meteor.publish("postsGuest", function() {
    // switch
    return Posts.find({});
  });
}
