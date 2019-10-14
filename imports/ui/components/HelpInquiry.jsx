import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MailSharpIcon from '@material-ui/icons/MailSharp';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { links } from '../text/links.js';

const useStyles = makeStyles((theme) => ({
  helpInquiry: {
    backgroundColor: '#ff7270',
  },
  helpButton: {
    backgroundColor: '#623232',
    borderRadius: '0',
    color: '#ffffff',
    padding: '10px 16px',
    width: '100%',
  },
  HelpIcon: {
    color: '#ffffff',
    fontSize: '65px',
  },
  header: {
    color: '#ffffff',
    fontSize: '30px',
  },
  subheader: {
    color: '#ffffff',
  },
  container: {
    paddingBottom: '60px',
    paddingTop: '60px',
  },
  helpButtonCell: {
    textAlign: 'center',
  },
}));

export default function helpInquiry() {
  const classes = useStyles();

  return (
    <div className={classes.helpInquiry}>
      <Box>
        <Container className={classes.container}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item md={9} sm={12} xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item>
                  <MailSharpIcon className={classes.HelpIcon} />
                </Grid>
                <Grid item>
                  <Typography className={`${classes.header} lightboldText`}>
                    Looking for help?
                  </Typography>
                  <Typography className={`${classes.subheader} lightText`}>
                    Have any questions or need help with order? Let us know!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Grid item sm={12} xs={12} style={{ height: '50px' }} />
            </Hidden>
            <Grid item md={3} sm={12} xs={12} className={classes.helpButtonCell}>
              <Button href={links.brands.url} className={`${classes.helpButton} lightboldText`}>
                MAKE AN INQUIRY
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
