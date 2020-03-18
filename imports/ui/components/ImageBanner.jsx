/** @format */

import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Plx from "react-plx";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { links } from "../text/links";
import { getBanners } from "../actions/banners";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: "#f0efee"
  },
  activeButton: {
    backgroundColor: "#ff7270",
    color: "#ffffff",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "rgba(255,114,112,0.7)"
    }
  },
  itemName: {
    fontSize: "70px"
  },
  itemFact: {
    fontSize: "50px"
  },
  itemDesc: {
    fontSize: "16px",
    maxWidth: "400px",
    paddingBottom: "16px"
  },
  spacing: {
    height: "70px",
    position: "relative",
    zIndex: "100000"
  },
  minImg: {
    maxWidth: "100%",
    zIndex: "100"
  },
  ImageSkeleton: {
    margin: "1em"
  },
  TextSkeletons: {
    width: "100%",
    minWidth: "600px",
    textAlign: "center"
  },
  TextSkeleton: {
    margin: "1em",
    marginTop: "2em",
    marginBottom: "2em",
    maxWidth: "80%"
  },
  textBox: {
    zIndex: "100000"
  }
}));

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: -40,
        endValue: 90,
        property: "translateY"
      }
    ]
  }
];

const mobileParallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: -20,
        endValue: 90,
        property: "translateY"
      }
    ]
  }
];

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

const ProductParallaxBanner = props => {
  const { loaded, lang, bannersTracker, banner } = props;
  const classes = useStyles();
  const width = useWidth();

  React.useEffect(() => {
    bannersTracker();
  }, []);

  return (
    <>
      <div className={classes.mainContainer}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            {loaded ? (
              <Plx
                className="MyAwesomeParallax"
                parallaxData={
                  width === "sm" || width === "xs"
                    ? mobileParallaxData
                    : parallaxData
                }
              >
                <img className={classes.minImg} src={banner[0].img} alt="" />
              </Plx>
            ) : (
              <Skeleton
                height={600}
                width={400}
                className={classes.ImageSkeleton}
              />
            )}
          </Grid>
          <Grid item className={classes.textBox}>
            <Box>
              {loaded ? (
                <>
                  <Typography className="lightText headerText middleText">
                    {banner[0].thirdHeader[lang] || banner[0].thirdHeader.en}
                  </Typography>
                  <Typography
                    className={`boldText headerText ${classes.itemName}`}
                  >
                    {banner[0].firstHeader[lang] || banner[0].firstHeader.en}
                  </Typography>
                  <Typography
                    className={`boldText activeText ${classes.itemFact}`}
                  >
                    {banner[0].secondHeader[lang] || banner[0].secondHeader.en}
                  </Typography>
                  <Typography
                    className={`lightText ${classes.itemDesc}`}
                    color="textSecondary"
                  >
                    {banner[0].desc[lang] || banner[0].desc.en}
                  </Typography>

                  <Button
                    onClick={() => navigate(links.products.url)}
                    className={classes.activeButton}
                  >
                    {banner[0].buttonText[lang] || banner[0].buttonText.en}
                  </Button>
                </>
              ) : (
                <div className={classes.TextSkeletons}>
                  <Skeleton height={22} className={classes.TextSkeleton} />
                  <Skeleton height={22} className={classes.TextSkeleton} />
                  <Skeleton height={22} className={classes.TextSkeleton} />
                  <Skeleton height={22} className={classes.TextSkeleton} />
                  <Skeleton height={22} className={classes.TextSkeleton} />
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className={classes.spacing} />
    </>
  );
};

ProductParallaxBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  banner: PropTypes.array.isRequired,
  bannersTracker: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    lang: state.i18nState.lang,
    banner: state.bannersElement.parallaxMainBanner,
    loaded: state.bannersElement.parallaxMainBanner.length !== 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bannersTracker: () => getBanners()(dispatch)
  };
};

const Banner = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductParallaxBanner);

export default Banner;
