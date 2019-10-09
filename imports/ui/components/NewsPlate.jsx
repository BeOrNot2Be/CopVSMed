import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  post: {
    maxWidth: '280px',
  },
  card: {
    padding: '0',
  },
});

export default function NewsCard(props) {
  const {
    post, ...other
  } = props;

  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.card}>
        <CardActions>
          <CardContent className={classes.post}>
            <Typography>
              {post.date}
            </Typography>
            <Typography>
              {post.name}
            </Typography>
            <Typography >
              {post.commentsNum}
            </Typography>
          </CardContent>
        </CardActions>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.any.isRequired,
};
