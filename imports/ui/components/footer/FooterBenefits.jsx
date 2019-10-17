import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import RedeemIcon from '@material-ui/icons/Redeem';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import IconsList from '../IconsList.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: 'red[800]',
    },
  },
  iconCell: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '45px',
    color: '#ff7270',
  },
  footerText: {
    color: '#ffffff',
  },
}));

export default function FooterBenefits() {
  const classes = useStyles();

  const benefits = [
    {
      icon: (<DraftsIcon className={classes.icon} />),
      text: 'Free Shipping in Europe',
    },
    {
      icon: (<AccountBalanceWalletIcon className={classes.icon} />),
      text: 'Money Back Guarantee',
    },
    {
      icon: (<PhoneIcon className={classes.icon} />),
      text: '24/7 Customer Support',
    },
    {
      icon: (<MonetizationOnIcon className={classes.icon} />),
      text: 'Lowest Prices Guaranteed',
    },
    {
      icon: (<RedeemIcon className={classes.icon} />),
      text: 'Exclusive Items for Sportshol',
    },
    {
      icon: (<LocalShippingIcon className={classes.icon} />),
      text: '5-Day Delivery in Europe',
    },
  ];

  return (
    <IconsList cells={benefits} textClass={`${classes.footerText} lightText`} />
  );
}
