/** @format */
/* eslint-disable no-underscore-dangle */

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { QuestionAnswer } from "@material-ui/icons";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  post: {
    maxWidth: "300px",
    padding: "16px!important",
    paddingTop: "40%!important"
  },
  card: {
    padding: "0!important",
    backgroundColor: "rgba(98, 50, 50, 0.8)"
  },
  plate: {
    borderRadius: "0",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  newsDate: {
    color: "#ffffff"
  },
  newsName: {
    color: "#ffffff"
  },
  newsComments: {
    color: "#ff7270",
    fontSize: "13px",
    padding: "5px"
  },
  newsCommentsText: {
    position: "absolute",
    display: "inline"
  }
});

const NewsPlateComponent = (props, context) => {
  const { post, lang } = props;
  const classes = useStyles();
  const { t } = context;

  return (
    <Card
      className={classes.plate}
      style={{ backgroundImage: `url(${post.img})` }}
    >
      <CardContent className={classes.card}>
        <CardActionArea onClick={() => navigate(`/news/${post._id}`)}>
          <CardContent className={classes.post}>
            <Typography className={`${classes.newsDate} lightboldText`}>
              {`${t(post.date.slice(0, 3))}${post.date.slice(3)}`}
            </Typography>
            <Typography className={`${classes.newsName} lightText`}>
              {post.name[lang] || post.name.en}
            </Typography>
            <div className={`${classes.newsComments} lightText`}>
              <QuestionAnswer style={{ paddingRight: "5px" }} />
              <Typography className={`${classes.newsCommentsText} lightText`}>
                {post.commentsNum}{" "}
                {post.commentsNum === 1 ? t("comment") : t("comments")}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

NewsPlateComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

NewsPlateComponent.propTypes = {
  post: PropTypes.any.isRequired,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.i18nState.lang,
    post: ownProps.post
  };
};

const NewsPlate = connect(mapStateToProps)(NewsPlateComponent);

export default NewsPlate;
