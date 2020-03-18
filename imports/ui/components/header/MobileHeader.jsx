/** @format */

import React from "react";
import { Meteor } from "meteor/meteor";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Badge,
  Box,
  Avatar,
  Modal,
  Button,
  Grid
} from "@material-ui/core";
import {
  Description,
  HomeRounded,
  Store,
  Help,
  Storefront,
  Close,
  ExpandMore,
  ExpandLess,
  Menu,
  AccountCircle,
  GTranslate,
  ExitToApp
} from "@material-ui/icons";
import { connect } from "react-redux";
import { setLanguage } from "redux-i18n";
import PropTypes from "prop-types";
import { USER_LOGIN, USER_LOGOUT } from "../../actions/general";
import { navigate } from "@reach/router";
import { links } from "../../text/links.js";

const useStyles = makeStyles(theme => ({
  headerTop: {
    backgroundColor: "#482423!important"
  },
  fullList: {
    width: "100vw",
    backgroundColor: "#482423!important",
    color: "#ffffff"
  },
  brandName: {
    flexGrow: 1
  },
  closeButtonListItem: {
    justifyContent: "flex-end",
    paddingTop: "10px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    paddingRight: "28px"
  },
  icons: {
    color: "#ffffff"
  },
  closeButton: {
    padding: "0px"
  },
  AccountAlerts: {
    backgroundColor: "#ff7270"
  },
  paper: {
    position: "absolute",
    width: "calc(100% - 32px)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "16px"
  },
  LangCloseIcon: {
    color: "#482423"
  },
  LangCloseButton: {
    float: "right"
  },
  LangCode: {
    fontSize: "22px",
    color: "#482423"
  },
  LangCodes: {
    paddingTop: "26px"
  },
  LangModal: {
    zIndex: "100000!important"
  },
  TopMenu: {
    zIndex: "100000!important"
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    transform: `translate(0, -${left}%)`
  };
}

const MobileHeaderComponent = (props, context) => {
  const { changeLanguage, langs, user, login, openAccount, logout } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [openStore, setOpenStore] = React.useState(false);
  const [openTherms, setOpenTherms] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const handleClick = () => {
    setOpenStore(!openStore);
  };
  /*
  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  Login Account work
  */
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, ["top"]: open });
  };

  const [LangOpen, setLangOpen] = React.useState(false);

  const LangHandleOpen = () => {
    setLangOpen(true);
  };

  const LangHandleClose = () => {
    setLangOpen(false);
  };

  const [modalStyle] = React.useState(getModalStyle);

  const { t } = context;

  const fullList = () => (
    <div className={`${classes.fullList} lightText`} role="presentation">
      <List>
        <ListItem className={classes.closeButtonListItem}>
          <IconButton
            aria-label="exit"
            className={classes.closeButton}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Close className={classes.icons} />
          </IconButton>
        </ListItem>
        <ListItem
          button
          onClick={Object.keys(user).length ? openAccount : login}
        >
          {Object.keys(user).length ? (
            <>
              <ListItemAvatar>
                <Badge
                  badgeContent={user.profile.messages}
                  classes={{ badge: classes.AccountAlerts }}
                >
                  {user.profile.img !== "" ? (
                    <Avatar src={user.profile.img} alt={user.profile.name} />
                  ) : (
                    <AccountCircle className={classes.icons} />
                  )}
                </Badge>
              </ListItemAvatar>
              <ListItemText primary={t(links.account.name)} />
            </>
          ) : (
            <>
              <ListItemAvatar>
                <AccountCircle className={classes.icons} />
              </ListItemAvatar>
              <ListItemText
                primary={`${t(links.login.name)} / ${links.register.name}`}
              />
            </>
          )}
        </ListItem>
        {Object.keys(user).length ? (
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <ExitToApp className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={t(links.logout.name)} />
          </ListItem>
        ) : (
          ""
        )}
        <ListItem button onClick={() => navigate(links.home.url)}>
          <ListItemIcon>
            <HomeRounded className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t(links.home.name)} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Store className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t("clothes")} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStore} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button onClick={() => navigate(links.men.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.men.name)} />
            </ListItem>
            <ListItem button onClick={() => navigate(links.women.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.women.name)} />
            </ListItem>
            <ListItem button onClick={() => navigate(links.kids.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.kids.name)} />
            </ListItem>
            <ListItem button onClick={() => navigate(links.sales.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.sales.name)} />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button onClick={() => navigate(links.brands.url)}>
          <ListItemIcon>
            <Storefront className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t(links.brands.name)} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate(links.support.url)}>
          <ListItemIcon>
            <Help className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t(links.support.name)} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setOpenTherms(!openTherms)}>
          <ListItemIcon>
            <Description className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t("therms")} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTherms} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button onClick={() => navigate(links.delivery.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.delivery.name)} />
            </ListItem>
            <ListItem button onClick={() => navigate(links.about_us.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.about_us.name)} />
            </ListItem>
            <ListItem button onClick={() => navigate(links.legal.url)}>
              <ListItemIcon>
                <div />
              </ListItemIcon>
              <ListItemText primary={t(links.legal.name)} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={LangHandleOpen}>
          <ListItemIcon>
            <GTranslate className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary={t("languages")} />
        </ListItem>
        <Modal
          aria-labelledby="lang-modal-title"
          aria-describedby="lang-modal-description"
          open={LangOpen}
          onClose={LangHandleClose}
          className={classes.LangModal}
        >
          <div style={modalStyle} className={classes.paper}>
            <Button
              onClick={LangHandleClose}
              className={classes.LangCloseButton}
            >
              <Close className={classes.LangCloseIcon} />
            </Button>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.LangCodes}
            >
              {langs.map((lang, index) => (
                <Grid item key={index}>
                  <Button
                    className={classes.LangCode}
                    onClick={() => {
                      changeLanguage(lang);
                      LangHandleClose();
                    }}
                  >
                    {lang}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Modal>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={classes.headerTop}>
      <Toolbar>
        <Box className={classes.brandName}>
          <img
            src="https://res.cloudinary.com/dioqoihcx/image/upload/v1584495567/images/Logo_nlhva0_vhpdcj.png"
            alt="smth"
          />
        </Box>
        <IconButton
          onClick={toggleDrawer(true)}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor="top"
          open={state.top}
          className={classes.TopMenu}
          onClose={toggleDrawer(false)}
        >
          {fullList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

MobileHeaderComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

MobileHeaderComponent.propTypes = {
  langs: PropTypes.array.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  openAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    langs: state.general.langs,
    user: Meteor.user() || {}
  };
};

const mapActionsToProps = dispatch => {
  return {
    changeLanguage: lang => dispatch(setLanguage(lang)),
    login: () => dispatch({ type: USER_LOGIN }),
    logout: () => dispatch({ type: USER_LOGOUT }),
    openAccount: () => links.account.url
  };
};

const MobileHeader = connect(
  mapStateToProps,
  mapActionsToProps
)(MobileHeaderComponent);

export default MobileHeader;
