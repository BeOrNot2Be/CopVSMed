/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import IconsList from "./IconsList.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2)
    }
  },
  iconCell: {
    textAlign: "center"
  },
  imageIcon: {
    width: "100%",
    height: "auto"
  },
  iconRoot: {
    textAlign: "center",
    width: "100%",
    height: "auto"
  }
}));

const TechnologiesTab = () => {
  const classes = useStyles();
  const techs = [
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Adidas.svg" alt="" />
        </Icon>
      ),
      text: ""
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/NIKE-Full.svg" alt="" />
        </Icon>
      ),
      text: ""
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Puma.svg" alt="" />
        </Icon>
      ),
      text: ""
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Asics.svg" alt="" />
        </Icon>
      ),
      text: ""
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img
            className={classes.imageIcon}
            src="/icon/New-Balance.svg"
            alt=""
          />
        </Icon>
      ),
      text: ""
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Fila.svg" alt="" />
        </Icon>
      ),
      text: ""
    }
  ];

  return <IconsList cells={techs} textClass="" />;
};

export default TechnologiesTab;
