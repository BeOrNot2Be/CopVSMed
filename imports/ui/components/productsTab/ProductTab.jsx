/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, Box, Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ProductCard from "./ProductCard.jsx";

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

const TabPanel = props => {
  const { value, tabIndex, items, ...other } = props;
  const width = useWidth();

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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {width === "sm" || width === "xs"
              ? items
                  .slice(0, 3)
                  .map((element, index) => (
                    <ProductCard item={element} key={index} />
                  ))
              : items.map((element, index) => (
                  <ProductCard item={element} key={index} />
                ))}
          </Grid>
        </Container>
      </Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  items: PropTypes.array.isRequired,
  tabIndex: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default TabPanel;
