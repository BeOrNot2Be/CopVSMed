import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Card, CardContent, CardActionArea, CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    height: 0,
    paddingTop: '56.25%',
  },
  card: {
    padding: '0',
    paddingBottom: '0!important',
  },
  cardPrice: {
    fontSize: '24px',
  },
  cardName: {
    fontSize: '16px',
  },
  cardSku: {
    fontSize: '13px',
  },
  corssedText: {
    textDecoration: 'line-through',
    fontSize: '16px',
  },
  cardSale: {
    color: '#ff7270',
  },
  priceGap: {
    height: '23.750px',
  },
  salePercent: {
    backgroundColor: '#ff7270',
    color: '#ffffff',
    padding: '5px',
    position: 'absolute',
    right: '0px',
    fontSize: '16px',
    fontFamily: 'TruenoBold!important',
    fontWeight: 'bold',
    top: '20px',
  },
}));

const lang = 'en';

const ProductCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item md={3} sm={12} xs={12}>
      <Card style={{ borderRadius: '0px' }}>
        <CardContent className={classes.card}>
          <CardActionArea href={`/products/${item._id}`}>
            <CardContent>
              {item.sale ? (
                <>
                  <Typography className={`lightText ${classes.cardPrice} ${classes.cardSale}`}>
                    ${(Math.round((item.price - (item.price / 100 * item.sale)) * 100) / 100).toFixed(2)}
                  </Typography>
                  <span className={classes.salePercent}>-{item.sale}%</span>
                </>
              ) : (
                <></>
              )}
              <Typography className={`lightText ${classes.cardPrice} ${item.sale ? classes.corssedText : ''}`} color="textSecondary">
                ${item.price}
              </Typography>
              {item.sale ? (
                <></>
              ) : (
                <div className={classes.priceGap} />
              )}
            </CardContent>
            <CardMedia className={classes.img} image={item.img} title={item.name[lang]} />
            <CardContent>
              <Typography className={`boldText ${classes.cardName}`} color="textSecondary">
                {item.gender[lang]}
              </Typography>
              <Typography className={`lightText ${classes.cardName}`} color="textSecondary">
                {item.name[lang]}
              </Typography>
              <Typography className={`lightText ${classes.cardSku}`} color="textSecondary">
                #{item.skuNum}
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProductCard.propTypes = {
  item: PropTypes.any.isRequired,
};

export default ProductCard;
