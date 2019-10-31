import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {
  AppBar, Tabs, Tab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ProductTab from './ProductTab.jsx';
import { getProducts } from '../../actions/products';


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
      fontSize: '21px!important',
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: '21px!important',
    },
  },
}));


const ProductsTabsComponent = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabHeader}>
        <Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example" className={classes.tab}>
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="New" {...a11yProps(0)} />
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="Popular" {...a11yProps(1)} />
          <Tab classes={{ selected: 'Mui-selected-main' }} className={` ${classes.tabMobile} lightText`} label="Top Picks" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <ProductTab value={value} tabIndex={0} items={props.reviewsNew} />
      <ProductTab value={value} tabIndex={1} items={props.reviewsPopular} />
      <ProductTab value={value} tabIndex={2} items={props.reviewsTop} />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    lang: state.general.lang,
    ...state.productsElement.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => getProducts()(dispatch),
  };
};

const ProductsTabs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsTabsComponent);


export default ProductsTabs;
