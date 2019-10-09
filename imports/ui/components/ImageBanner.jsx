import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Parallax } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
    fontSize: '16px',
  },
  imageParallox: {
    margin: '0',
  },
}));

const item = {
  price: '80.00',
  img: 'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
  name: 'CM v1',
  fact: '8 varients',
  shortdesc: 'Made with love to them whom we love more than world',
};

export default function Component() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Grid item>
          <Parallax className={classes.imageParallox} y={[-30, 20]}>
            <img src={item.img} alt="" />
          </Parallax>
        </Grid>
        <Grid item>
          <Box>
            <Typography className="lightText headerText middleText">
              From $ 
              {' '}
              {item.price}
            </Typography>
            <Typography className={`boldText headerText ${classes.itemName}`}>
              {item.name}
            </Typography>
            <Typography className={`boldText activeText ${classes.itemFact}`}>
              {item.fact}
            </Typography>
            <Typography className={`lightText ${classes.itemDesc}`} color="textSecondary">
              {item.shortdesc}
            </Typography>

            <Button className={classes.activeButton}>Browese Variants</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
