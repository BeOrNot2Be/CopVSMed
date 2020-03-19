/** @format */

import React from "react";
import { Meteor } from "meteor/meteor";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Box,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import { ShoppingBasketRounded, GTranslate } from "@material-ui/icons";
import { connect } from "react-redux";
import { setLanguage } from "redux-i18n";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { links } from "../../text/links.js";
import { USER_LOGIN, USER_LOGOUT } from "../../actions/general";

const useStyles = makeStyles(theme => ({
  headerTop: {
    backgroundColor: "#482423!important"
  },
  headerBottom: {
    backgroundColor: "#633231"
  },
  link: {
    margin: theme.spacing(1),
    color: "#ffffff"
  },
  button: {},
  legalPages: {
    flexGrow: 1
  },
  brandName: {
    flexGrow: 1
  },
  headerNav: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250
  },
  fullList: {
    width: "100wh"
  },
  registrationLink: {
    backgroundColor: "#ff7270"
  }
}));

const DesktopHeaderComponent = (props, context) => {
  const { changeLanguage, cart, langs, login, logout, user } = props;
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
                    <Button
                      onClick={() => navigate(links.support.url)}
                      className={classes.link}
                    >
                      {t(links.support.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.delivery.url)}
                      className={classes.link}
                    >
                      {t(links.delivery.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.legal.url)}
                      className={classes.link}
                    >
                      {t(links.legal.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.about_us.url)}
                      className={classes.link}
                    >
                      {t(links.about_us.name)}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Button
                      aria-controls="lang-menu"
                      aria-haspopup="true"
                      onClick={LangButtonHandleClick}
                      className={classes.link}
                    >
                      <GTranslate />
                    </Button>
                    <Menu
                      id="lang-menu"
                      anchorEl={LangButtonState}
                      keepMounted
                      open={Boolean(LangButtonState)}
                      onClose={LangButtonHandleClose}
                    >
                      {langs.map((lang, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            changeLanguage(lang);
                            LangButtonHandleClose();
                          }}
                        >
                          {lang}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Grid>
                  <Grid item>
                    <Button className={classes.link}>
                      <ShoppingBasketRounded style={{ marginRight: "5px" }} />{" "}
                      {`${cart.sum}$`} {cart.items.length}{" "}
                      {cart.items.length === 1 ? t("item") : t("items")}
                    </Button>
                  </Grid>
                  {Object.keys(user).length ? (
                    <>
                      <Grid item className={classes.registrationLink}>
                        <Button
                          onClick={() => navigate(links.account.link)}
                          className={classes.link}
                        >
                          {t(links.account.name)}
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button onClick={logout} className={classes.link}>
                          {t(links.logout.name)}
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item>
                        <Button onClick={login} className={classes.link}>
                          {t(links.login.name)}
                        </Button>
                      </Grid>
                      <Grid item className={classes.registrationLink}>
                        <Button onClick={login} className={classes.link}>
                          {t(links.register.name)}
                        </Button>
                      </Grid>
                    </>
                  )}
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
                <img
                  src="https://res.cloudinary.com/dioqoihcx/image/upload/v1584495567/images/Logo_nlhva0_vhpdcj.png"
                  alt="smth"
                />
              </Grid>
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.home.url)}
                      className={classes.link}
                    >
                      {t(links.home.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.men.url)}
                      className={classes.link}
                    >
                      {t(links.men.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.women.url)}
                      className={classes.link}
                    >
                      {t(links.women.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.kids.url)}
                      className={classes.link}
                    >
                      {t(links.kids.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.brands.url)}
                      className={classes.link}
                    >
                      {t(links.brands.name)}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate(links.sales.url)}
                      className={classes.link}
                    >
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
  t: PropTypes.func.isRequired
};

DesktopHeaderComponent.propTypes = {
  langs: PropTypes.array.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  cart: PropTypes.any.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    langs: state.general.langs,
    cart: state.general.cart,
    user: Meteor.user() || {}
  };
};

const mapActionsToProps = dispatch => {
  return {
    changeLanguage: lang => dispatch(setLanguage(lang)),
    login: () => dispatch({ type: USER_LOGIN }),
    logout: () => dispatch({ type: USER_LOGOUT })
  };
};

const DesktopHeader = connect(
  mapStateToProps,
  mapActionsToProps
)(DesktopHeaderComponent);

export default DesktopHeader;
