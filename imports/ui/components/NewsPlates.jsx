import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import NewsPlate from './NewsPlate.jsx';
import { getNews } from '../actions/news';

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


const NewsPlatesComponent = (props) => {
  const classes = useStyles();
  React.useEffect(() => {
    props.getNews();
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={`${classes.header} boldText`}>
        LATEST NEWS {/*translate */}
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
            {(props.news.length === 3) ? (
              <>
                {props.news.map((plate) => (
                  <Grid item key={plate._id}>
                    <NewsPlate post={plate} />
                  </Grid>
                ))}
              </>
            ) : (
              'loading'
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    news: state.newsElement.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => getNews()(dispatch),
  };
};

const NewsPlates = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsPlatesComponent);


export default NewsPlates;
