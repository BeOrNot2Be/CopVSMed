/**
 * /* eslint-disable jsx-a11y/tabindex-no-positive
 *
 * @format
 */

import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Container,
  Grid,
  Card,
  CardContent
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductTab from "./ProductTab.jsx";
import { getProducts } from "../../actions/products";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  tab: {
    backgroundColor: "#ffffff",
    color: "black"
  },
  tabHeader: {
    boxShadow: "none",
    marginTop: "70px"
  },
  tabMobile: {
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "21px!important"
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "21px!important"
    }
  },
  mediaSkeleton: {
    height: "0",
    paddingTop: "56.25%",
    margin: "0px"
  },
  card: {
    padding: "0",
    paddingBottom: "0!important"
  },
  skeleton: {
    margin: "3px"
  }
}));

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

const ProductSkeleton = props => {
  const classes = useStyles();

  return (
    <Grid item md={3} sm={12} xs={12}>
      <Card style={{ borderRadius: "0px" }}>
        <CardContent className={classes.card}>
          <CardContent>
            <Skeleton width={40} height={30} className={classes.skeleton} />
          </CardContent>
          <Skeleton className={classes.mediaSkeleton} />
          <CardContent>
            <Skeleton width={40} height={24} className={classes.skeleton} />
            <Skeleton width={65} height={24} className={classes.skeleton} />
            <Skeleton width={85} height={19} className={classes.skeleton} />
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
};

const ProductsTabsComponent = (props, context) => {
  const {
    loaded,
    reviewsNew,
    reviewsPopular,
    reviewsTop,
    productsTracker
  } = props;
  const classes = useStyles();
  const width = useWidth();

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    productsTracker();
  }, []);

  const { t } = context;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabHeader}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="simple tabs example"
          className={classes.tab}
        >
          <Tab
            classes={{ selected: "Mui-selected-main" }}
            className={` ${classes.tabMobile} lightText`}
            label={t("new_tab")}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ selected: "Mui-selected-main" }}
            className={` ${classes.tabMobile} lightText`}
            label={t("popular_tab")}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ selected: "Mui-selected-main" }}
            className={` ${classes.tabMobile} lightText`}
            label={t("top_tab")}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      {loaded ? (
        <>
          <ProductTab value={value} tabIndex={0} items={reviewsNew} />
          <ProductTab value={value} tabIndex={1} items={reviewsPopular} />
          <ProductTab value={value} tabIndex={2} items={reviewsTop} />
        </>
      ) : (
        <Box p={3}>
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              {width === "sm" || width === "xs"
                ? [...Array(3)].map((element, index) => (
                    <ProductSkeleton key={index} />
                  ))
                : [...Array(8)].map((element, index) => (
                    <ProductSkeleton key={index} />
                  ))}
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
};

ProductsTabsComponent.propTypes = {
  loaded: PropTypes.bool.isRequired,
  reviewsNew: PropTypes.any.isRequired,
  reviewsPopular: PropTypes.any.isRequired,
  reviewsTop: PropTypes.any.isRequired,
  productsTracker: PropTypes.func.isRequired
};

ProductsTabsComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    lang: state.lang,
    loaded:
      state.productsElement.products.reviewsNew.length === 8 &&
      state.productsElement.products.reviewsPopular.length === 8 &&
      state.productsElement.products.reviewsTop.length === 8,
    ...state.productsElement.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productsTracker: () => getProducts()(dispatch)
  };
};

const ProductsTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTabsComponent);

export default ProductsTabs;
