/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountBalanceWallet,
  Drafts,
  Phone,
  MonetizationOn,
  Redeem,
  LocalShipping
} from "@material-ui/icons";
import PropTypes from "prop-types";
import IconsList from "../IconsList.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2)
    }
  },
  icon: {
    fontSize: "45px",
    color: "#ff7270"
  },
  footerText: {
    color: "#ffffff"
  }
}));

const FooterBenefitsComponent = (props, context) => {
  const classes = useStyles();
  const { t } = context;

  const benefits = [
    {
      icon: <Drafts className={classes.icon} />,
      text: t("mail_footer")
    },
    {
      icon: <AccountBalanceWallet className={classes.icon} />,
      text: t("guarantee_footer")
    },
    {
      icon: <Phone className={classes.icon} />,
      text: t("call_footer")
    },
    {
      icon: <MonetizationOn className={classes.icon} />,
      text: t("price_footer")
    },
    {
      icon: <Redeem className={classes.icon} />,
      text: t("items_footer")
    },
    {
      icon: <LocalShipping className={classes.icon} />,
      text: t("delivery_footer")
    }
  ];

  return (
    <div>
      <IconsList
        cells={benefits}
        textClass={`${classes.footerText} lightText`}
      />
    </div>
  );
};

FooterBenefitsComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default FooterBenefitsComponent;
