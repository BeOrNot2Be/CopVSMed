import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { YouTube, Twitter, Facebook, Pinterest } from '@material-ui/icons';
import { links } from '../../text/links.js';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    paddingTop: theme.spacing(1.9),
    paddingBottom: theme.spacing(1.9),
  },
  link: {
    color: '#ffffff',
  },
  licenseText: {
    fontSize: '16px',
    color: '#ffffff',
    textAlign: 'center',
  },
}));

export default function FooterNav() {
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
              <img src="https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570695248/Logo_nlhva0.png" alt="smth" />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography className={`lightText ${classes.licenseText}`}>
                © 2019 Sportshold. All rights reserved.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Grid container justify="center">
                <Grid item>
                  <Button href={links.twitter.url} className={classes.link}>
                    <Twitter />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href={links.facebook.url} className={classes.link}>
                    <Facebook />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href={links.pinterest.url} className={classes.link}>
                    <Pinterest />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href={links.youtube.url} className={classes.link}>
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
}
