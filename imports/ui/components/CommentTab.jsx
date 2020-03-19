/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "16px",
    borderRadius: "0"
  },
  ReviewText: {
    color: "#ffffff"
  }
});

const CommentTab = props => {
  const classes = useStyles();
  const { value, tabIndex, review, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== tabIndex}
      id={`simple-tabpanel-${tabIndex}`}
      aria-labelledby={`simple-tab-${tabIndex}`}
      {...other}
    >
      <Box p={3} className={classes.root}>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Paper className={classes.card}>
                <Typography className={`${classes.ReviewText} lightText `}>
                  {review}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Typography>
  );
};

CommentTab.propTypes = {
  review: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default CommentTab;
