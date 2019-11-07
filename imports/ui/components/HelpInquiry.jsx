import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Button, Typography, Hidden,
} from '@material-ui/core';
import { MailSharp } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
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
  subHeader: {
    color: '#ffffff',
  },
  container: {
    paddingBottom: '60px',
    paddingTop: '60px',
  },
  helpButtonCell: {
    textAlign: 'center',
  },
  TextBox: {
    paddingLeft: '32px!important',
  },
}));

const helpInquiry = () => {
  const classes = useStyles();
  const [t, i18n] = useTranslation('translation');

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
                spacing={2}
              >
                <Grid item md={2} sm={2} xs={2}>
                  <MailSharp className={classes.HelpIcon} />
                </Grid>
                <Grid item md={7} sm={9} xs={9} className={classes.TextBox}>
                  <Typography className={`${classes.header} lightboldText`}>
                    {t('general.help_button_header')}
                  </Typography>
                  <Typography className={`${classes.subHeader} lightText`}>
                    {t('general.help_button_secondary')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Grid item sm={12} xs={12} style={{ height: '50px' }} />
            </Hidden>
            <Grid item md={3} sm={12} xs={12} className={classes.helpButtonCell}>
              <Button href={links.brands.url} className={`${classes.helpButton} lightboldText`}>
                {t('general.help_button')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default helpInquiry;
