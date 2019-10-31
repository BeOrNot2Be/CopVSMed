import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import Plx from 'react-plx';
import {
  Grid, Box, Button, Typography, withWidth,
} from '@material-ui/core';
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
    zIndex: '100000',
  },
  minImg: {
    maxWidth: '100%',
  },
}));

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: -10,
        endValue: 100,
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
      {
        (props.banner.length !== 0) ?
          (
            <>
              <div className={classes.mainContainer}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                  <Grid item>
                    <Plx
                      className="MyAwesomeParallax"
                      parallaxData={(props.width === 'sm') || (props.width === 'xs') ? mobileParallaxData : parallaxData}
                    >
                      <img className={classes.minImg} src={props.banner[0].img} alt="" />
                    </Plx>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography className="lightText headerText middleText">
                        {props.banner[0].thirdHeader[props.lang]}
                      </Typography>
                      <Typography className={`boldText headerText ${classes.itemName}`}>
                        {props.banner[0].firstHeader[props.lang]}                
                      </Typography>
                      <Typography className={`boldText activeText ${classes.itemFact}`}>
                        {props.banner[0].secondHeader[props.lang]}
                      </Typography>
                      <Typography className={`lightText ${classes.itemDesc}`} color="textSecondary">
                        {props.banner[0].desc[props.lang]}
                      </Typography>
                      <Button href={links.products.url} className={classes.activeButton}>{props.banner[0].buttonText[props.lang]}</Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.spacing} />
            </>
          ) : (
            "loading"
          )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.general.lang,
    banner: state.bannersElement.parallaxMainBanner,
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
