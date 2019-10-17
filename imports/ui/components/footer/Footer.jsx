import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterBenefits from './FooterBenefits.jsx';
import FooterMap from './FooterMap.jsx';
import FooterNav from './FooterNav.jsx';
import GapBar from '../GapBar.jsx';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#633231',
  },
  footerNav: {
    paddingTop: theme.spacing(1.9),
    paddingBottom: theme.spacing(1.9),
  },
}));

const changeLang = (str) => str;

const links = {
  login: { url: '#', name: changeLang('Login') },
  register: { url: '#', name: changeLang('Register') },
  support: { url: '#', name: changeLang('Support') },
  delevery: { url: '#', name: changeLang('Delivery') },
  legal: { url: '#', name: changeLang('Legal') },
  about_us: { url: '#', name: changeLang('About Us') },
  home: { url: '#', name: changeLang('Home') },
  men: { url: '#', name: changeLang('Men') },
  women: { url: '#', name: changeLang('Women') },
  kids: { url: '#', name: changeLang('Kids') },
  brands: { url: '#', name: changeLang('Our Brands') },
  sales: { url: '#', name: changeLang('Sales') }, 
};

const usr = {
  cart: {
    items: ['model 1', 'model 2', 'model 43'],
    sum: '150.65$',
  },
};

export default function footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <FooterBenefits />
      <GapBar />
      <FooterMap />
      <GapBar />
      <FooterNav />
    </div>
  );
}
