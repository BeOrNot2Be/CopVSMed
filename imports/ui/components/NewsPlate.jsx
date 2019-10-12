import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Typography from '@material-ui/core/Typography';

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

export default function NewsCard(props) {
  const {
    post, ...other
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.plate} style={{ backgroundImage: `url(${post.img})` }}>
      <CardContent className={classes.card}>
        <CardActionArea href={`/news/${post.id}`}>
          <CardContent className={classes.post}>
            <Typography className={`${classes.newsDate} lightboldText`}>
              {post.date}
            </Typography>
            <Typography className={`${classes.newsName} lightText`}>
              {post.name}
            </Typography>
            <div className={`${classes.newsComments} lightText`}>
              <QuestionAnswerIcon style={{ paddingRight: '5px' }} />
              <Typography className={`${classes.newsCommentsText} lightText`}>
                {post.commentsNum}
                {' '}
                {(post.commentsNum === 1) ? 'Comment' : 'Comments'}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.any.isRequired,
};
