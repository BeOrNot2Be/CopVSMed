/** @format */

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Hidden,
  AppBar,
  Tabs,
  Tab,
  Container,
  Grid,
  Typography,
  Avatar,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { Rating, Skeleton } from "@material-ui/lab";
import { StarBorder, ExpandMore } from "@material-ui/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CommentTab from "./CommentTab.jsx";
import { getReviews } from "../actions/reviews";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage:
      "url(https://res.cloudinary.com/dioqoihcx/image/upload/v1584525392/images/typing-games-670x335_j51cge.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  tabHeader: {
    boxShadow: "none",
    backgroundColor: ""
  },
  reviewerName: {
    color: "#ffffff"
  },
  avatar: {
    border: "2px solid #ffffff",
    width: "60px",
    height: "60px",
    marginBottom: "20px"
  },
  indicator: {
    display: "none"
  },
  color: {
    backgroundImage:
      "linear-gradient(rgba(98, 50, 50, 0.9) 10%, rgba(98, 50, 50, 1))",
    paddingTop: "70px",
    paddingBottom: "70px"
  },
  panel: {
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  arrowIcon: {
    color: "#ffffff"
  },
  ReviewText: {
    color: "#ffffff"
  },
  avatarSmall: {
    border: "2px solid #ffffff",
    width: "60px",
    height: "60px"
  },
  AvatarSkeleton: {
    margin: "4px 0px"
  },
  commentSkeleton: {
    width: "100%",
    height: "100%",
    left: "0",
    margin: "0px"
  },
  commentSkeletonContainer: {
    padding: "2rem 2rem 0 2rem"
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff7270"
  },
  iconHover: {
    color: "#ff7270"
  },
  iconEmpty: {
    color: "#ff7270"
  }
})(Rating);

const StyledTab = withStyles({
  selected: {
    color: "#ff7270"
  }
})(Tab);

const getLabelText = value => `${value} Star${value !== 1 ? "s" : ""}`;

const ReviewsTabComponent = props => {
  const { loaded, lang, reviewsTracker, reviews } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    reviewsTracker();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.color}>
        <Hidden smDown>
          <AppBar position="static" className={classes.tabHeader}>
            {loaded ? (
              <Tabs
                TabIndicatorProps={{ className: classes.indicator }}
                value={value}
                onChange={handleChange}
                centered
                aria-label="simple tabs example"
              >
                {reviews.map((review, index) => (
                  <StyledTab
                    selected
                    key={review._id}
                    className="lightText middleText"
                    icon={
                      <>
                        <Avatar
                          className={classes.avatar}
                          src={review.img}
                          alt={review.name[lang] || review.name.en}
                        />
                        <Typography
                          className={`${classes.reviewerName} lightboldText`}
                        >
                          {review.name[lang] || review.name.en}
                        </Typography>
                        <StyledRating
                          name={review.name[lang] || review.name.en}
                          value={review.starsNum}
                          getLabelText={getLabelText}
                          precision={0.5}
                          emptyIcon={<StarBorder fontSize="inherit" />}
                          readOnly
                        />
                      </>
                    }
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            ) : (
              <Tabs
                TabIndicatorProps={{ className: classes.indicator }}
                value={value}
                onChange={handleChange}
                centered
                aria-label="simple tabs example"
              >
                <StyledTab
                  selected
                  className="lightText middleText"
                  icon={
                    <>
                      <Skeleton variant="circle" height={60} width={60} />
                      <Skeleton
                        height={20}
                        width={200}
                        className={classes.AvatarSkeleton}
                      />
                      <Skeleton
                        height={38}
                        width={150}
                        className={classes.AvatarSkeleton}
                      />
                    </>
                  }
                  {...a11yProps(0)}
                />
                <StyledTab
                  selected
                  className="lightText middleText"
                  icon={
                    <>
                      <Skeleton variant="circle" height={60} width={60} />
                      <Skeleton
                        height={24}
                        width={200}
                        className={classes.AvatarSkeleton}
                      />
                      <Skeleton
                        height={30}
                        width={150}
                        className={classes.AvatarSkeleton}
                      />
                    </>
                  }
                  {...a11yProps(1)}
                />
                <StyledTab
                  selected
                  className="lightText middleText"
                  icon={
                    <>
                      <Skeleton variant="circle" height={60} width={60} />
                      <Skeleton
                        height={24}
                        width={200}
                        className={classes.AvatarSkeleton}
                      />
                      <Skeleton
                        height={30}
                        width={150}
                        className={classes.AvatarSkeleton}
                      />
                    </>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            )}
          </AppBar>
          {loaded ? (
            <>
              {reviews.map((review, index) => (
                <CommentTab
                  value={value}
                  tabIndex={index}
                  key={review._id}
                  review={review.text[lang] || review.text.en}
                />
              ))}
            </>
          ) : (
            <div className={classes.commentSkeletonContainer}>
              <Skeleton height={105} className={classes.commentSkeleton} />
            </div>
          )}
        </Hidden>
        <Hidden mdUp>
          <Container>
            {loaded ? (
              <>
                {reviews.map((review, index) => (
                  <ExpansionPanel key={review._id} className={classes.panel}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMore className={classes.arrowIcon} />}
                      aria-controls={`panel${index + 1}a-content`}
                      id={`panel${index + 1}a-header`}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item sm={4} xs={4}>
                          <Avatar
                            className={classes.avatarSmall}
                            src={review.img}
                            alt={review.name[lang] || review.name.en}
                          />
                        </Grid>
                        <Grid container item sm={6} xs={6}>
                          <Grid item>
                            <Typography
                              className={`${classes.reviewerName} lightboldText`}
                            >
                              {review.name[lang] || review.name.en}
                            </Typography>
                          </Grid>
                          <Grid item sm={12} xs={12}>
                            <StyledRating
                              name={review.name[lang] || review.name.en}
                              value={review.starsNum}
                              getLabelText={getLabelText}
                              precision={0.5}
                              emptyIcon={<StarBorder fontSize="inherit" />}
                              readOnly
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography
                        className={`${classes.ReviewText} lightText `}
                      >
                        {review.text[lang] || review.text.en}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
              </>
            ) : (
              <>
                <ExpansionPanel className={classes.panel}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMore className={classes.arrowIcon} />}
                    aria-controls={`panel${1}a-content`}
                    id={`panel${1}a-header`}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item sm={4} xs={4}>
                        <Skeleton variant="circle" height={60} width={60} />
                      </Grid>
                      <Grid container item sm={6} xs={6}>
                        <Grid item>
                          <Skeleton height={24} width={180} />
                        </Grid>
                        <Grid item sm={12} xs={12}>
                          <Skeleton height={24} width={120} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Skeleton height={72} width="100%" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.panel}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMore className={classes.arrowIcon} />}
                    aria-controls={`panel${2}a-content`}
                    id={`panel${2}a-header`}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item sm={4} xs={4}>
                        <Skeleton variant="circle" height={60} width={60} />
                      </Grid>
                      <Grid container item sm={6} xs={6}>
                        <Grid item>
                          <Skeleton height={24} width={180} />
                        </Grid>
                        <Grid item sm={12} xs={12}>
                          <Skeleton height={24} width={120} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Skeleton height={72} width="100%" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.panel}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMore className={classes.arrowIcon} />}
                    aria-controls={`panel${3}a-content`}
                    id={`panel${3}a-header`}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item sm={4} xs={4}>
                        <Skeleton variant="circle" height={60} width={60} />
                      </Grid>
                      <Grid container item sm={6} xs={6}>
                        <Grid item>
                          <Skeleton height={24} width={180} />
                        </Grid>
                        <Grid item sm={12} xs={12}>
                          <Skeleton height={24} width={120} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Skeleton height={72} width="100%" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </>
            )}
          </Container>
        </Hidden>
      </div>
    </div>
  );
};

ReviewsTabComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  reviews: PropTypes.array.isRequired,
  reviewsTracker: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    lang: state.i18nState.lang,
    reviews: state.reviewsElement.reviews,
    loaded: state.reviewsElement.reviews.length === 3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reviewsTracker: () => getReviews()(dispatch)
  };
};

const ReviewsTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsTabComponent);

export default ReviewsTab;
