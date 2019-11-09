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
  const t = smth => smth;

  const benefits = [
    {
      icon: (<Drafts className={classes.icon} />),
      text: t('general.mail_footer'),
    },
    {
      icon: (<AccountBalanceWallet className={classes.icon} />),
      text: t('general.guarantee_footer'),
    },
    {
      icon: (<Phone className={classes.icon} />),
      text: t('general.call_footer'),
    },
    {
      icon: (<MonetizationOn className={classes.icon} />),
      text: t('general.price_footer'),
    },
    {
      icon: (<Redeem className={classes.icon} />),
      text: t('general.items_footer'),
    },
    {
      icon: (<LocalShipping className={classes.icon} />),
      text: t('general.delivery_footer'),
    },
  ];

  return (
    <IconsList cells={benefits} textClass={`${classes.footerText} lightText`} />
  );
};

export default FooterBenefits;
