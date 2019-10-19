import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Box, Container,
} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import ProductCard from './ProductCard.jsx';

const TabPanel = (props) => {
  const {
    value, tabIndex, items, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== tabIndex}
      id={`simple-tabpanel-${tabIndex}`}
      aria-labelledby={`simple-tab-${tabIndex}`}
      {...other}
    >
      <Box p={3}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            {(props.width === 'sm') || (props.width === 'xs')
              ? (items.slice(0, 3).map((element, index) => <ProductCard item={element} key={index} />))
              : (items.map((element, index) => <ProductCard item={element} key={index} />))}
          </Grid>
        </Container>
      </Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  items: PropTypes.any.isRequired,
  tabIndex: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default withWidth()(TabPanel);
