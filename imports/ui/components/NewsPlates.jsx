/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewsPlate from "./NewsPlate.jsx";
import { getNews } from "../actions/news";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "70px",
    paddingBottom: "70px"
  },
  header: {
    color: "#623232",
    fontSize: "30px",
    textAlign: "center",
    paddingBottom: "30px"
  },
  cardSkeleton: {
    width: "332px",
    minWidth: "270px",
    height: "258px",
    margin: "0px"
  }
}));

const NewsPlatesComponent = (props, context) => {
  const { loaded, newsTracker, news } = props;
  const classes = useStyles();
  React.useEffect(() => {
    newsTracker();
  }, []);
  const { t } = context;

  return (
    <div className={classes.root}>
      <Typography className={`${classes.header} boldText`}>
        {t("news")}
      </Typography>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {loaded ? (
              <>
                {news.map(plate => (
                  <Grid item key={plate._id}>
                    <NewsPlate post={plate} />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

NewsPlatesComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

NewsPlatesComponent.propTypes = {
  loaded: PropTypes.bool.isRequired,
  news: PropTypes.array.isRequired,
  newsTracker: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    news: state.newsElement.news,
    loaded: state.newsElement.news.length === 3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newsTracker: () => getNews()(dispatch)
  };
};

const NewsPlates = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPlatesComponent);

export default NewsPlates;
