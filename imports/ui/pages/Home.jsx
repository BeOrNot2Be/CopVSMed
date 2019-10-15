import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductParalaxBanner from '../components/ImageBanner.jsx';
import ProductsTabWidget from '../components/ProductsTabWidget.jsx';
import TechnologiesTab from '../components/TechnologiesTab.jsx';
import HelpInquiry from '../components/HelpInquiry.jsx';
import PostCards from '../components/PostCards.jsx';
import NewsPlates from '../components/NewsPlates.jsx';
import ReviesTab from '../components/ReviesTab.jsx';


const useStyles = makeStyles((theme) => ({

}));


export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <ProductParalaxBanner scrollAxis="vertical" />
      <PostCards />
      <ProductsTabWidget />
      <TechnologiesTab />
      <ReviesTab />
      <NewsPlates />
      <HelpInquiry />
    </div>
  );
}
