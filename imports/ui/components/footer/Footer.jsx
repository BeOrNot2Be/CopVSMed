/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterBenefits from "./FooterBenefits.jsx";
import FooterMap from "./FooterMap.jsx";
import FooterNav from "./FooterNav.jsx";
import GapBar from "../GapBar.jsx";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#633231"
  }
}));

const footer = () => {
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
};

export default footer;
