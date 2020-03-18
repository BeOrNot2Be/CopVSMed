/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Button, Typography } from "@material-ui/core";
import { YouTube, Twitter, Facebook, Pinterest } from "@material-ui/icons";
import { navigate } from "@reach/router";
import { links } from "../../text/links.js";

const useStyles = makeStyles(theme => ({
  footerNav: {
    paddingTop: theme.spacing(1.9),
    paddingBottom: theme.spacing(1.9)
  },
  link: {
    color: "#ffffff"
  },
  licenseText: {
    fontSize: "16px",
    color: "#ffffff",
    textAlign: "center"
  }
}));

const FooterNav = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.footerNav}
            spacing={3}
          >
            <Grid item md={4} sm={12} xs={12}>
              <img
                src="https://res.cloudinary.com/dioqoihcx/image/upload/v1584495567/images/Logo_nlhva0_vhpdcj.png"
                alt="smth"
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography className={`lightText ${classes.licenseText}`}>
                © 2019 Sportshold. All rights reserved.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Grid container justify="center">
                <Grid item>
                  <Button
                    onClick={() => navigate(links.twitter.url)}
                    className={classes.link}
                  >
                    <Twitter />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => navigate(links.facebook.url)}
                    className={classes.link}
                  >
                    <Facebook />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => navigate(links.pinterest.url)}
                    className={classes.link}
                  >
                    <Pinterest />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => navigate(links.youtube.url)}
                    className={classes.link}
                  >
                    <YouTube />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FooterNav;
