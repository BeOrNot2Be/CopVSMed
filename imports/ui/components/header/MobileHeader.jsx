import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Collapse from '@material-ui/core/Collapse';
import Badge from '@material-ui/core/Badge';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import StarBorder from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
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

export default function MobileHeader() {
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

  const fullList = side => (
    <div
      className={`${classes.fullList} lightText`}
      role="presentation"
    >
      <List>
        <ListItem className={classes.closeButtonListItem}>
          <IconButton aria-label="exit" className={classes.closeButton} onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
            <CloseIcon className={classes.icons} />
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
              <ListItemText primary={links.account.name} />
            </>
          ) : (
            <>
              <AccountCircle className={classes.icons} />
              <ListItemText primary={links.account.name} />
            </>
          )}
        </ListItem>
        <ListItem button href={links.home.url}>
          <ListItemIcon><HomeRoundedIcon className={classes.icons} /></ListItemIcon>
          <ListItemText primary={links.home.name} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon><StoreIcon className={classes.icons} /></ListItemIcon>
          <ListItemText primary="Clothe" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStore} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button href={links.men.url}>
              <ListItemIcon />
              <ListItemText primary={links.men.name} />
            </ListItem>
            <ListItem button href={links.women.url}>
              <ListItemIcon />
              <ListItemText primary={links.women.name} />
            </ListItem>
            <ListItem button href={links.kids.url}>
              <ListItemIcon />
              <ListItemText primary={links.kids.name} />
            </ListItem>
            <ListItem button href={links.sales.url}>
              <ListItemIcon />
              <ListItemText primary={links.sales.name} />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button href={links.brands.url}>
          <ListItemIcon><StorefrontIcon className={classes.icons} /></ListItemIcon>
          <ListItemText primary={links.brands.name} />
        </ListItem>
        <Divider />
        <ListItem button href={links.support.url}>
          <ListItemIcon><HelpIcon className={classes.icons} /></ListItemIcon>
          <ListItemText primary={links.support.name} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setOpenTherms(!openTherms)}>
          <ListItemIcon><DescriptionIcon className={classes.icons} /></ListItemIcon>
          <ListItemText primary="Therms" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTherms} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem button href={links.delevery.url}>
              <ListItemIcon />
              <ListItemText primary={links.delevery.name} />
            </ListItem>
            <ListItem button href={links.about_us.url}>
              <ListItemIcon />
              <ListItemText primary={links.about_us.name} />
            </ListItem>
            <ListItem button href={links.legal.url}>
              <ListItemIcon />
              <ListItemText primary={links.legal.name} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <Hidden mdUp>
      <AppBar position="static" className={classes.headerTop}>
        <Toolbar>
          <Box className={classes.brandName}>
            <img src="https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570695248/Logo_nlhva0.png" alt="smth" />
          </Box>
          <IconButton onClick={toggleDrawer('top', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
            {fullList('top')}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
}
