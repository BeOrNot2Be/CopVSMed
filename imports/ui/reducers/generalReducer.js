/**
 * /* eslint-disable no-case-declarations
 *
 * @format
 */

// eslint-disable-next-line import/no-unresolved
import { Meteor } from "meteor/meteor";
import auth0 from "auth0-js";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
// eslint-disable-next-line import/no-unresolved
import { Accounts } from "meteor/accounts-base";
import { navigate } from "@reach/router";
import {
  NEW_LANGUAGE_UPDATE,
  USER_LOGIN,
  USER_LOGOUT,
  PROCESS_LOGIN,
  USER_AUTH_CHECK
} from "../actions/general";

const getAuthObj = () =>
  new auth0.WebAuth({
    domain: "beotnot2be.auth0.com",
    clientID: "iLSi5VhBv41nmzaoNg7iDFIbfAnVraEY",
    redirectUri: "https://copvsmed.herokuapp.com/callback",
    responseType: "token id_token",
    scope: "openid profile email"
  });

const initState = {
  authObj: getAuthObj(),
  cart: {
    items: [],
    sum: 0
  },
  langs: [],
  token: "some token gen",
  postsElement: {},
  newsElement: {},
  bannersElement: {},
  reviewsElement: {},
  productsElement: {}
};

const meteorLogin = user => {
  console.log(user);
  Accounts.createUser(
    {
      email: user.email,
      password: user.aud,
      profile: {
        fname: user.given_name || "",
        lname: user.family_name || "",
        name: user.name || "",
        nickname: user.nickname || "",
        img: user.picture || "",
        messages: 0
      }
    },
    err => {
      console.log(err);
      Meteor.loginWithPassword(user.email, user.aud, errLogin =>
        console.log(errLogin)
      );
    }
  );
};

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expiresAt");
  Meteor.logout(err => console.log(err));
};

const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case NEW_LANGUAGE_UPDATE:
      return { ...state, langs: state.langs.concat([action.lang]) };

    case USER_LOGIN:
      state.authObj.authorize();
      return state;

    case PROCESS_LOGIN:
      state.authObj.parseHash((parseError, authResult) => {
        if (authResult) {
          localStorage.setItem("access_token", authResult.accessToken);
          localStorage.setItem("id_token", authResult.idToken);

          const expiresTime = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          );
          localStorage.setItem("expiresAt", expiresTime);
          const user = jwt_decode(authResult.idToken);
          meteorLogin(user);
          navigate("/");
        } else {
          console.log(parseError);
        }
      });
      return { ...state };

    case USER_AUTH_CHECK:
      const userTokenInfo = localStorage.getItem("id_token");
      const userTokenExpTime = JSON.parse(localStorage.getItem("expiresAt"));

      if (userTokenInfo !== null) {
        if (new Date().getTime() > userTokenExpTime) {
          logout();
          console.log("USER_AUTH_CHECK");
        } else {
          meteorLogin(jwt_decode(userTokenInfo));
        }
      }
      return state;

    case USER_LOGOUT:
      logout();
      return { ...state };

    default:
      return state;
  }
};

export default generalReducer;
