/** @format */
/* eslint-disable */

import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "beotnot2be.auth0.com",
    clientID: "iLSi5VhBv41nmzaoNg7iDFIbfAnVraEY",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid profile email"
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);

        const expiresTime = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("expiresAt", expiresTime);
      } else {
        console.log(err);
      }
    });
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expiresAt");
  };
}
