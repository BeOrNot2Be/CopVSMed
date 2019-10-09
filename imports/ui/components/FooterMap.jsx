import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailSharpIcon from '@material-ui/icons/MailSharp';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
}));

export default function FooterMap() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneInTalkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="CALL US" secondary="0 (1234) 567 890" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailSharpIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="EMAIL US" secondary="hello@sportshold.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <RoomIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="ADDRESS" secondary="40 Baria Sreet 133/2, NY, US" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemText primary="CALL US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="hello@sportshold.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemText primary="CALL US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="hello@sportshold.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemText primary="CALL US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="hello@sportshold.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item>
                <List>
                  <ListItem>
                    <ListItemText primary="CALL US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="hello@sportshold.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="40 Baria Sreet 133/2, NY, US" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
