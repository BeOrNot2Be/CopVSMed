/** @format */

import React from "react";
import ProductParallaxBanner from "../components/ImageBanner.jsx";
import ProductsTabWidget from "../components/productsTab/ProductsTabWidget.jsx";
import TechnologiesTab from "../components/TechnologiesTab.jsx";
import HelpInquiry from "../components/HelpInquiry.jsx";
import PostCards from "../components/PostCards.jsx";
import NewsPlates from "../components/NewsPlates.jsx";
import ReviewsTab from "../components/ReviewsTab.jsx";

const HomePage = () => (
  <div>
    <ProductParallaxBanner />
    <PostCards />
    <ProductsTabWidget />
    <TechnologiesTab />
    <ReviewsTab />
    <NewsPlates />
    <HelpInquiry />
  </div>
);

export default HomePage;
