import React, { Suspense }  from 'react';
import { Router } from '@reach/router';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/Home.jsx';

const App = (props) => {
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

export default App;
