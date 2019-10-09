import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { YouTube, Twitter, Facebook, Pinterest } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    paddingTop: theme.spacing(1.9),
    paddingBottom: theme.spacing(1.9),
  },
  link: {
    color: '#ffffff',
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
          >
            <Grid item>
              Some Logo-Text
            </Grid>
            <Grid item>
              © 2017 Sportshold. All rights reserved.
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Button href="#" className={classes.link}>
                    <Twitter />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#" className={classes.link}>
                    <Facebook />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#" className={classes.link}>
                    <Pinterest />
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#" className={classes.link}>
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
