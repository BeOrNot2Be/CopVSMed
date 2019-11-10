import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plx from 'react-plx';
import {
  Grid, Box, Button, Typography, withWidth,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { connect } from 'react-redux';
import { links } from '../text/links';
import { getBanners } from '../actions/banners';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: '#f0efee',
  },
  activeButton: {
    backgroundColor: '#ff7270',
    color: '#ffffff',
    borderRadius: '0px',
  },
  itemName: {
    fontSize: '70px',
  },
  itemFact: {
    fontSize: '50px',
  },
  itemDesc: {
    fontSize: '16px', //font size
    maxWidth: '400px',
    paddingBottom: '16px',
  },
  imageParallox: {
    margin: '0',
  },
  spacing: {
    height: '70px',
    backgroundColor: '#ffffff',
    position: 'relative',
    zIndex: '100000',
  },
  minImg: {
    maxWidth: '100%',
    zIndex: '100',
  },
  ImageSkeleton: {
    margin: '1em',
  },
  TextSkeletons: {
    width: '100%',
    minWidth: '600px',
    textAlign: 'center',
  },
  TextSkeleton: {
    margin: '1em',
    marginTop: '2em',
    marginBottom: '2em',
    maxWidth: '80%',
  },
  textBox: {
    zIndex: '100000',
  },
}));

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: -10,
        endValue: 95,
        property: 'translateY',
      },
    ],
  },
];

const mobileParallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: 'translateY',
      },
    ],
  },
];


const ProductParallaxBanner = (props) => {
  const classes = useStyles();

  React.useEffect(() => {
    props.getBanners();
  }, []);

  return (
    <>
      <div className={classes.mainContainer}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item>
            {props.loaded ? (
              <Plx
                className="MyAwesomeParallax"
                parallaxData={(props.width === 'sm') || (props.width === 'xs') ? mobileParallaxData : parallaxData}
              >
                <img className={classes.minImg} src={props.banner[0].img} alt="" />
              </Plx>
            ) : (
              <Skeleton height={600} width={400} className={classes.ImageSkeleton} />
            )}
          </Grid>
          <Grid item className={classes.textBox}>
            <Box>
              {props.loaded ? (
                <>
                  <Typography className="lightText headerText middleText">
                    {props.banner[0].thirdHeader[props.lang] || props.banner[0].thirdHeader['en']}
                  </Typography>
                  <Typography className={`boldText headerText ${classes.itemName}`}>
                    {props.banner[0].firstHeader[props.lang] || props.banner[0].firstHeader['en']}                
                  </Typography>
                  <Typography className={`boldText activeText ${classes.itemFact}`}>
                    {props.banner[0].secondHeader[props.lang] || props.banner[0].secondHeader['en']}
                  </Typography>
                  <Typography className={`lightText ${classes.itemDesc}`} color="textSecondary">
                    {props.banner[0].desc[props.lang] || props.banner[0].desc['en']}
                  </Typography>

                  <Button href={links.products.url} className={classes.activeButton}>{props.banner[0].buttonText[props.lang] || props.banner[0].buttonText['en'] }</Button>
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

const mapStateToProps = (state) => {
  return {
    lang: state.i18nState.lang,
    banner: state.bannersElement.parallaxMainBanner,
    loaded: (state.bannersElement.parallaxMainBanner.length !== 0),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: () => getBanners()(dispatch),
  };
};

const Banner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductParallaxBanner);


export default Banner;
