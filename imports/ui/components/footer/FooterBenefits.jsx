import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountBalanceWallet, Drafts, Phone, MonetizationOn,
  Redeem, LocalShipping,
} from '@material-ui/icons';
import IconsList from '../IconsList.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  icon: {
    fontSize: '45px',
    color: '#ff7270',
  },
  footerText: {
    color: '#ffffff',
  },
}));

const FooterBenefits = () => {
  const classes = useStyles();

  const benefits = [
    {
      icon: (<Drafts className={classes.icon} />),
      text: 'Free Shipping in Europe',
    },
    {
      icon: (<AccountBalanceWallet className={classes.icon} />),
      text: 'Money Back Guarantee',
    },
    {
      icon: (<Phone className={classes.icon} />),
      text: '24/7 Customer Support',
    },
    {
      icon: (<MonetizationOn className={classes.icon} />),
      text: 'Lowest Prices Guaranteed',
    },
    {
      icon: (<Redeem className={classes.icon} />),
      text: 'Exclusive Items for Sportshol',
    },
    {
      icon: (<LocalShipping className={classes.icon} />),
      text: '5-Day Delivery in Europe',
    },
  ];

  return (
    <IconsList cells={benefits} textClass={`${classes.footerText} lightText`} />
  );
};

export default FooterBenefits;
