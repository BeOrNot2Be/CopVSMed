import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Typography,
} from '@material-ui/core';
import NewsPlate from './NewsPlate.jsx';
import { News } from '../../api/schemas';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '70px',
    paddingBottom: '70px',
  },
  header: {
    color: '#623232',
    fontSize: '30px',
    textAlign: 'center',
    paddingBottom: '30px',
  },
}));


const NewsPlates = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={`${classes.header} boldText`}>
        LATEST NEWS
      </Typography>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {props.news.map((plate) => (
              <Grid item key={plate._id}>
                <NewsPlate post={plate} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};


export default withTracker((props) => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const handle = Meteor.subscribe('news');

  return {
    // currentUser: Meteor.user(),
    listLoading: !handle.ready(),
    news: News.find({}, { limit: 3 }).fetch(),
  };
})(NewsPlates);
