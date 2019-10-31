import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardContent, Typography,
} from '@material-ui/core';
import { QuestionAnswer } from '@material-ui/icons';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  post: {
    maxWidth: '300px',
    padding: '16px!important',
    paddingTop: '40%!important',
  },
  card: {
    padding: '0!important',
    backgroundColor: 'rgba(98, 50, 50, 0.8)',
  },
  plate: {
    borderRadius: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  newsDate: {
    color: '#ffffff',
  },
  newsName: {
    color: '#ffffff',
  },
  newsComments: {
    color: '#ff7270',
    fontSize: '13px',
    padding: '5px',
  },
  newsCommentsText: {
    position: 'absolute',
    display: 'inline',
  },
});

const NewsPlateComponent = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.plate} style={{ backgroundImage: `url(${props.post.img})` }}>
      <CardContent className={classes.card}>
        <CardActionArea href={`/news/${props.post.id}`}>
          <CardContent className={classes.post}>
            <Typography className={`${classes.newsDate} lightboldText`}>
              {props.post.date} {/*translate*/}
            </Typography>
            <Typography className={`${classes.newsName} lightText`}>
              {props.post.name[props.lang]}
            </Typography>
            <div className={`${classes.newsComments} lightText`}>
              <QuestionAnswer style={{ paddingRight: '5px' }} />
              <Typography className={`${classes.newsCommentsText} lightText`}>
                {props.post.commentsNum}
                {' '}
                {(props.post.commentsNum === 1) ? 'Comment' : 'Comments'} {/*translate*/}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

NewsPlateComponent.propTypes = {
  post: PropTypes.any.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.general.lang,
    post: ownProps.post,
  };
};

const NewsPlate = connect(
  mapStateToProps,
)(NewsPlateComponent);


export default NewsPlate;
