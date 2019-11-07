import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Box, Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  cardSkeleton: {
    width: '332px',
    minWidth: '270px',
    height: '258px',
    margin: '0px',
  },
}));


const NewsPlatesComponent = (props) => {
  const classes = useStyles();
  React.useEffect(() => {
    props.getNews();
  }, []);
  const [t, i18n] = useTranslation('translation');

  return (
    <div className={classes.root}>
      <Typography className={`${classes.header} boldText`}>
        {t('general.news')}
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
            {props.loaded ? (
              <>
                {props.news.map((plate) => (
                  <Grid item key={plate._id}>
                    <NewsPlate post={plate} />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
                <Grid item>
                  <Skeleton className={classes.cardSkeleton} />
                </Grid>
              </>
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
    loaded: (state.newsElement.news.length === 3),
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
