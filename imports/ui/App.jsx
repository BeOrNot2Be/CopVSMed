import React from 'react';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/Home.jsx';
import { getTranslation } from './actions/general';

const AppComponent = (props) => {
  const {
    languageTracker,
  } = props;

  React.useEffect(() => {
    languageTracker();
  }, []);

  return (
    <>
      <Header />
      <Router>
        <HomePage path="/" />
      </Router>
      <Footer />
    </>
  );
};

AppComponent.propTypes = {
  languageTracker: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    languageTracker: () => getTranslation()(dispatch),
  };
};

const App = connect(
  null,
  mapDispatchToProps,
)(AppComponent);

export default App;
