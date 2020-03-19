/** @format */

import React from "react";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import CallbackPage from "./pages/CallbackPage.jsx";
import { getTranslation, USER_AUTH_CHECK } from "./actions/general";

const AppComponent = props => {
  const { languageTracker, checkAuth } = props;

  React.useEffect(() => {
    languageTracker();
    checkAuth();
  }, []);

  return (
    <>
      <Header />
      <Router>
        <CallbackPage path="/callback" />
        <HomePage path="/*" />
      </Router>
      <Footer />
    </>
  );
};

AppComponent.propTypes = {
  languageTracker: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    languageTracker: () => getTranslation()(dispatch),
    checkAuth: () => dispatch({ type: USER_AUTH_CHECK })
  };
};

const App = connect(null, mapDispatchToProps)(AppComponent);

export default App;
