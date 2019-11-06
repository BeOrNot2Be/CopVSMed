import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Room, MailSharp, PhoneInTalk } from '@material-ui/icons';
import {
  Button, Container, Box, Grid, Avatar, ListItemAvatar,
  ListItemText, ListItem, List,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { links } from '../../text/links.js';

const useStyles = makeStyles((theme) => ({
  FooterIcon: {
    borderRadius: '0px',
    backgroundColor: '#ff7270',
  },
  primary: {
    color: '#ff7270',
    fontSize: '16px',
  },
  secondary: {
    color: '#ffffff',
  },
  secondaryItem: {
    paddingBottom: '0',
    textAlign: 'left',
  },
  button: {
    padding: '0',
    margin: '0',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: '14px',
    textAlign: 'left',
    width: '100%',
    justifyContent: 'left',
  },
}));


const FooterMap = () => {
  const classes = useStyles();
  const [t, i18n] = useTranslation('translation');

  return (
    <Box>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item md={2} sm={12} xs={12}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.FooterIcon}>
                    <PhoneInTalk />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className={`${classes.primary} lightboldText`} primary="CALL US" secondary="0 (1234) 567 890" secondaryTypographyProps={{ className: `${classes.secondary} lightText ` }} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.FooterIcon}>
                    <MailSharp />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className={`${classes.primary} lightboldText`} primary="EMAIL US" secondary="hello@sportshold.com" secondaryTypographyProps={{ className: `${classes.secondary} lightText ` }} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.FooterIcon}>
                    <Room />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className={`${classes.primary} lightboldText`} primary="ADDRESS" secondary="40 Baria Sreet 133/2, NY, US" secondaryTypographyProps={{ className: `${classes.secondary} lightText ` }} />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <List>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.primary} lightboldText`} primary="Navigation" />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.home.url} className={classes.button}>{t(links.home.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.about_us.url} className={classes.button}>{t(links.about_us.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.latest_news.url} className={classes.button}>{t(links.latest_news.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.reviews.url} className={classes.button}>{t(links.reviews.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.brands.url} className={classes.button}>{t(links.brands.name)}</Button>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <List>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.primary} lightboldText`} primary="Categories" />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.men.url} className={classes.button}>{t(links.men.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.women.url} className={classes.button}>{t(links.women.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.kids.url} className={classes.button}>{t(links.kids.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.baby.url} className={classes.button}>{t(links.baby.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.accessories.url} className={classes.button}>{t(links.accessories.name)}</Button>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <List>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.primary} lightboldText`} primary="Sales" />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.arrivals.url} className={classes.button}>{t(links.arrivals.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.popular.url} className={classes.button}>{t(links.popular.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.top_pics.url} className={classes.button}>{t(links.top_pics.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.outlet.url} className={classes.button}>{t(links.outlet.name)}</Button>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <List>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.primary} lightboldText`} primary="SUPPORT" />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.ship_delivery.url} className={classes.button}>{t(links.ship_delivery.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.return_policy.url} className={classes.button}>{t(links.return_policy.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.service_terms.url} className={classes.button}>{t(links.service_terms.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.privacy.url} className={classes.button}>{t(links.privacy.name)}</Button>} />
              </ListItem>
              <ListItem className={classes.secondaryItem}>
                <ListItemText className={`${classes.secondary} lightText `} disableTypography secondary={<Button href={links.contacts.url} className={classes.button}>{t(links.contacts.name)}</Button>} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterMap;
