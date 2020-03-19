/** @format */

import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomePage from "./Home.jsx";
import { PROCESS_LOGIN } from "../actions/general";

const useStyles = makeStyles(theme => ({
  loaderContainer: {
    zIndex: "10000000",
    position: "absolute",
    left: "calc(50% - 40px)",
    top: "calc(50% - 42px)"
  },
  loader: {
    color: "#ff7270"
  },
  Background: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    zIndex: "1000000",
    position: "fixed",
    alignItems: "center",
    touchAction: "none",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
}));

const CallbackPageComponent = (props, context) => {
  React.useEffect(() => {
    props.handleAuth();
  }, []);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.loaderContainer}>
        <CircularProgress className={classes.loader} thickness={10} size={80} />
      </div>
      <div className={classes.Background} />
      <HomePage />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleAuth: () => dispatch({ type: PROCESS_LOGIN })
});

const CallbackPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallbackPageComponent);

export default CallbackPage;
