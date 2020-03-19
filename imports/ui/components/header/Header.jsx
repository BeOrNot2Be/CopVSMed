/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import MobileHeader from "./MobileHeader.jsx";
import DesktopHeader from "./DesktopHeader.jsx";

const useStyles = makeStyles(theme => ({}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown>
        <DesktopHeader />
      </Hidden>
      <Hidden mdUp>
        <MobileHeader />
      </Hidden>
    </div>
  );
};

export default Header;
