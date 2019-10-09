import React from 'react';
import { Router } from '@reach/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home.jsx';

const App = () => (
  <ParallaxProvider>
    <Header />
    <Router>
      <HomePage path="/" />
    </Router>
    <Footer />
  </ParallaxProvider>
);

export default App;
