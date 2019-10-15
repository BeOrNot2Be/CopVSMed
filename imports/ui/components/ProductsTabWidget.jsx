import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductTab from './ProductTab.jsx';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    backgroundColor: '#ffffff',
    color: 'black',
  },
  tabHeader: {
    boxShadow: 'none',
  },
  tabMobile: {
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: "21px!important",
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: "21px!important",
    },
  }
}));

const itemsNew = [
  {
    id: 'sm1',
    price: '80.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v1',
    sex: 'men',
    sku: '2343234',
    sale: 0,
  },
  {
    id: 'sm2',
    price: '84.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v4',
    sex: 'women',
    sku: '2343134',
    sale: 20,
  },
  {
    id: 'sm3',
    price: '80.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v1',
    sex: 'men',
    sku: '2343234',
    sale: 0,
  },
  {
    id: 'sm4',
    price: '84.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v4',
    sex: 'women',
    sku: '2343134',
    sale: 20,
  },
  {
    id: 'sm5',
    price: '80.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v1',
    sex: 'men',
    sku: '2343234',
    sale: 0,
  },
  {
    id: 'sm6',
    price: '84.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v4',
    sex: 'women',
    sku: '2343134',
    sale: 20,
  },
];

const itemsTop = [
  {
    id: 'sm7',
    price: '80.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v1',
    sex: 'men',
    sku: '2343234',
    sale: 0,
  },
  {
    id: 'sm8',
    price: '84.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v4',
    sex: 'women',
    sku: '2343134',
    sale: 20,
  },
  {
    id: 'sm9',
    price: '20.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v23',
    sex: 'men/women',
    sku: '2311335',
    sale: 0,
  },
];

const itemsPopular = [
  {
    id: 'sm10',
    price: '80.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v1',
    sex: 'men',
    sku: '2343234',
    sale: 0,
  },
  {
    id: 'sm11',
    price: '84.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v4',
    sex: 'women',
    sku: '2343134',
    sale: 20,
  },
  {
    id: 'sm12',
    price: '20.00',
    img: 'https://images.unsplash.com/photo-1495443396064-16fd983acb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: 'CM v23',
    sex: 'men/women',
    sku: '2311335',
    sale: 0,
  },
];


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabHeader}>
        <Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example" className={classes.tab}>
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="New" {...a11yProps(0)} />
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="Popular" {...a11yProps(1)} />
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="Top Picks" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <ProductTab value={value} tabIndex={0} items={itemsNew} />
      <ProductTab value={value} tabIndex={1} items={itemsPopular} />
      <ProductTab value={value} tabIndex={2} items={itemsTop} />
    </div>
  );
}
