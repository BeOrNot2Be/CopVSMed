import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import Plx from 'react-plx';
import {
  Grid, Box, Button, Typography, withWidth,
} from '@material-ui/core';
import { links } from '../text/links';
import { Banners } from '../../api/schemas';

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

const item = {
  price: '80.00',
  img: 'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
  name: 'CM v1',
  fact: '8 varients',
  shortDesc: 'Since this is our favorite sneaker, we’re bringing you 50 variants to suit everyone’s needs.',
};

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

const lang = 'en';

const ProductParallaxBanner = (props) => {
  const classes = useStyles();
  return (
    <>
      {
        props.banner.length > 0?
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
                      {props.banner[0].thirdHeader[lang]}
                    </Typography>
                    <Typography className={`boldText headerText ${classes.itemName}`}>
                      {props.banner[0].firstHeader[lang]}                
                    </Typography>
                    <Typography className={`boldText activeText ${classes.itemFact}`}>
                      {props.banner[0].secondHeader[lang]}
                    </Typography>
                    <Typography className={`lightText ${classes.itemDesc}`} color="textSecondary">
                      {props.banner[0].desc[lang]}
                    </Typography>
                    <Button href={links.products.url} className={classes.activeButton}>{props.banner[0].buttonText[lang]}</Button>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div className={classes.spacing} />
          </>
          ):(
            "loading"
          )
      }
      
    </>
  );
};

export default withTracker((props) => {
  const handle = Meteor.subscribe('bannersAll');

  return {
    // currentUser: Meteor.user(),
    listLoading: !handle.ready(),
    banner: Banners.find({}, { limit: 1 }).fetch(), //random from relevant 
  };
})(withWidth()(ProductParallaxBanner));
