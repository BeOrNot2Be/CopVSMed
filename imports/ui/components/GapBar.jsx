/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footerGap: {
    border: "1px solid #795151"
  }
}));

const GapBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Container>
          <hr className={classes.footerGap} />
        </Container>
      </Box>
    </div>
  );
};

export default GapBar;
