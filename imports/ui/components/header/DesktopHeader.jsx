import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Button,
} from '@material-ui/core';
import { ShoppingBasketRounded } from '@material-ui/icons';
import { links } from '../../text/links.js';

const useStyles = makeStyles((theme) => ({
  headerTop: {
    backgroundColor: '#482423!important',
  },
  headerBottom: {
    backgroundColor: '#633231',
  },
  link: {
    margin: theme.spacing(1),
    color: '#ffffff',
  },
  button: {},
  legalPages: {
    flexGrow: 1,
  },
  brandName: {
    flexGrow: 1,
  },
  headerNav: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: '100wh',
  },
}));

const usr = {
  cart: {
    items: ['model 1', 'model 2', 'model 43'],
    sum: '150.65$',
  },
};

const DesktopHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerTop}>
        <Box>
          <Container>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item className={classes.legalPages}>
                <Grid container spacing={4}>
                  <Grid item>
                    <Button href={links.support.url} className={classes.link}>
                      {links.support.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.delevery.url} className={classes.link}>
                      {links.delevery.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.legal.url} className={classes.link}>
                      {links.legal.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.about_us.url} className={classes.link}>
                      {links.about_us.name}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button className={classes.link}>
                      <ShoppingBasketRounded style={{ marginRight: '5px' }} />
                      {' '}
                      {usr.cart.sum}
                      {' '}
                      {usr.cart.items.length}
                      {' '}
                      {usr.cart.items.length > 1 ? <>Items</> : <>Items</>}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.login.url} className={classes.link}>
                      {links.login.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.register.url} className={classes.link}>
                      {links.register.name}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid />
            </Grid>
          </Container>
        </Box>
      </div>
      <div className={classes.headerBottom}>
        <Box>
          <Container>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.headerNav}
            >
              <Grid item className={classes.brandName}>
                <img src="https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570695248/Logo_nlhva0.png" alt="smth" />
              </Grid>
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item>
                    <Button href={links.home.url} className={classes.link}>
                      {links.home.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.men.url} className={classes.link}>
                      {links.men.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.women.url} className={classes.link}>
                      {links.women.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.kids.url} className={classes.link}>
                      {links.kids.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.brands.url} className={classes.link}>
                      {links.brands.name}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.sales.url} className={classes.link}>
                      {links.sales.name}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid />
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default DesktopHeader;
