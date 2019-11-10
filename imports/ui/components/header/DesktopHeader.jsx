import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Button, Menu, MenuItem,
} from '@material-ui/core';
import { ShoppingBasketRounded, GTranslate } from '@material-ui/icons';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import PropTypes from 'prop-types';
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

const DesktopHeaderComponent = (props, context) => {
  const classes = useStyles();
  const [LangButtonState, setLangButtonState] = React.useState(null);

  const LangButtonHandleClick = event => {
    setLangButtonState(event.currentTarget);
  };

  const LangButtonHandleClose = () => {
    setLangButtonState(null);
  };

  const { t } = context;

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
                      {t(links.support.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.delivery.url} className={classes.link}>
                      {t(links.delivery.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.legal.url} className={classes.link}>
                      {t(links.legal.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.about_us.url} className={classes.link}>
                      {t(links.about_us.name)}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button aria-controls="lang-menu" aria-haspopup="true" onClick={LangButtonHandleClick} className={classes.link}>
                      <GTranslate />
                    </Button>
                    <Menu
                      id="lang-menu"
                      anchorEl={LangButtonState}
                      keepMounted
                      open={Boolean(LangButtonState)}
                      onClose={LangButtonHandleClose}
                    >
                      <MenuItem onClick={() => { props.changeLanguage('en'); LangButtonHandleClose(); }}>
                        EN
                      </MenuItem>
                      <MenuItem onClick={() => { props.changeLanguage('zh'); LangButtonHandleClose(); }}>
                        ZH
                      </MenuItem>
                      <MenuItem onClick={() => { props.changeLanguage('es'); LangButtonHandleClose(); }}>
                        ES
                      </MenuItem>
                      <MenuItem onClick={() => { props.changeLanguage('ru'); LangButtonHandleClose(); }}>
                        RU
                      </MenuItem>
                    </Menu>
                  </Grid>
                  <Grid item>
                    <Button className={classes.link}>
                      <ShoppingBasketRounded style={{ marginRight: '5px' }} />
                      {' '}
                      {`${props.cart.sum}$`}
                      {' '}
                      {props.cart.items.length}
                      {' '}
                      {props.cart.items.length === 1 ? t('item') : t('items')}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.login.url} className={classes.link}>
                      {t(links.login.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.register.url} className={classes.link}>
                      {t(links.register.name)}
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
                      {t(links.home.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.men.url} className={classes.link}>
                      {t(links.men.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.women.url} className={classes.link}>
                      {t(links.women.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.kids.url} className={classes.link}>
                      {t(links.kids.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.brands.url} className={classes.link}>
                      {t(links.brands.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href={links.sales.url} className={classes.link}>
                      {t(links.sales.name)}
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

DesktopHeaderComponent.contextTypes = {
  t: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    cart: state.general.cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    changeLanguage: (lang) => dispatch(setLanguage(lang)),
  };
};

const DesktopHeader = connect(
  mapStateToProps,
  mapActionsToProps,
)(DesktopHeaderComponent);

export default DesktopHeader;
