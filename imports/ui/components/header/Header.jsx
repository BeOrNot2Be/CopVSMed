import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import Button from '@material-ui/core/Button';
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
import Collapse from '@material-ui/core/Collapse';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { links } from '../../text/links.js';
import MobileHeader from './MobileHeader.jsx';

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

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
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


  


  return (
    <div>
      <Hidden smDown>
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
                        <ShoppingBasketRoundedIcon style={{ marginRight: '5px' }} />
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
      </Hidden>
      <MobileHeader />
    </div>
  );
}
