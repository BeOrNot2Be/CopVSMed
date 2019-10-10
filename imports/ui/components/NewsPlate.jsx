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
    maxWidth: '280px',
    marginTop: '30%',
    padding: '16px!important',
  },
  card: {
    padding: '0!important',
    backgroundColor: 'rgba(98, 50, 50, 0.7)',
  },
  plate: {
    borderRadius: '0',
  },
});

export default function NewsCard(props) {
  const {
    post, ...other
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.plate} style={{backgroundImage:`url(${post.img})`}} >
      <CardContent className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.post}>
            <Typography>
              {post.date}
            </Typography>
            <Typography>
              {post.name}
            </Typography>
            <Typography >
              <QuestionAnswerIcon /> {post.commentsNum}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.any.isRequired,
};
