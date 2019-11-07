import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton,
  Drawer, List, Divider, ListItem, ListItemIcon, ListItemText,
  ListItemAvatar, Collapse, Badge, Box, Avatar,
} from '@material-ui/core';
import {
  Description, HomeRounded, Store, Help,
  Storefront, Close, ExpandMore, ExpandLess,
  Menu, AccountCircle,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { links } from '../../text/links.js';


const useStyles = makeStyles((theme) => ({
  headerTop: {
    backgroundColor: '#482423!important',
  },
  fullList: {
    width: '100vw',
    backgroundColor: '#482423!important',
    color: '#ffffff',
  },
  brandName: {
    flexGrow: 1,
  },
  closeButtonListItem: {
    justifyContent: 'flex-end',
    paddingTop: '10px',
    paddingLeft: '0px',
    paddingBottom: '0px',
    paddingRight: '28px',
  },
  icons: {
    color: '#ffffff',
  },
  closeButton: {
    padding: '0px',
  },
  AccountAlerts: {
    backgroundColor: '#ff7270',
  },
}));

const MobileHeader = () => {
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
    right: false,
  });

  const handleClick = () => {
    setOpenStore(!openStore);
  };

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const [t, i18n] = useTranslation('translation');

  const fullList = side => (
    <div
      className={`${classes.fullList} lightText`}
      role="presentation"
    >
      <List>
        <ListItem className={classes.closeButtonListItem}>
          <IconButton aria-label="exit" className={classes.closeButton} onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
            <Close className={classes.icons} />
          </IconButton>
        </ListItem>
        <ListItem button href={auth ? links.account.url : links.login.url}>
          {auth ? (
            <>
              <ListItemAvatar>
                <Badge badgeContent={4} classes={{ badge: classes.AccountAlerts }}>
                  <AccountCircle className={classes.icons} />
                </Badge>
              </ListItemAvatar>
              <ListItemText primary={t(links.account.name)} />
            </>
          ) : (
            <>
              <AccountCircle className={classes.icons} />
              <ListItemText primary={t(links.account.name)} />
            </>
          )}
        </ListItem>
        <ListItem button href={links.home.url}>
          <ListItemIcon><HomeRounded className={classes.icons} /></ListItemIcon>
          <ListItemText primary={t(links.home.name)} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon><Store className={classes.icons} /></ListItemIcon>
          <ListItemText primary={t('general.clothe')} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStore} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button href={links.men.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.men.name)} />
            </ListItem>
            <ListItem button href={links.women.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.women.name)} />
            </ListItem>
            <ListItem button href={links.kids.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.kids.name)} />
            </ListItem>
            <ListItem button href={links.sales.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.sales.name)} />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button href={links.brands.url}>
          <ListItemIcon><Storefront className={classes.icons} /></ListItemIcon>
          <ListItemText primary={t(links.brands.name)} />
        </ListItem>
        <Divider />
        <ListItem button href={links.support.url}>
          <ListItemIcon><Help className={classes.icons} /></ListItemIcon>
          <ListItemText primary={t(links.support.name)} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setOpenTherms(!openTherms)}>
          <ListItemIcon><Description className={classes.icons} /></ListItemIcon>
          <ListItemText primary={t('general.therms')} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTherms} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button href={links.delivery.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.delivery.name)} />
            </ListItem>
            <ListItem button href={links.about_us.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.about_us.name)} />
            </ListItem>
            <ListItem button href={links.legal.url}>
              <ListItemIcon />
              <ListItemText primary={t(links.legal.name)} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={classes.headerTop}>
      <Toolbar>
        <Box className={classes.brandName}>
          <img src="https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570695248/Logo_nlhva0.png" alt="smth" />
        </Box>
        <IconButton onClick={toggleDrawer('top', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
          {fullList('top')}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
