import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(98, 50, 50, 0.7)',
    },
  });



function CommentTab(props) {
  const classes = useStyles();
  const {
    value, tabIndex, review, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== tabIndex}
      id={`simple-tabpanel-${tabIndex}`}
      aria-labelledby={`simple-tab-${tabIndex}`}
      {...other}
    >
      <Box p={3} className={classes.root}>
        <Container>
            <Card >
                <CardContent >
                    <CardActionArea>
                    <CardContent >
                        <Typography>
                            {review.name}
                        </Typography>
                        <Typography>
                            {review.img}
                        </Typography>
                        <Typography >
                            <Rating value={review.stars} readOnly />
                        </Typography>
                        <Typography >
                            {review.text}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </CardContent>
            </Card>
        </Container>
      </Box>
    </Typography>
  );
}

CommentTab.propTypes = {
  review: PropTypes.any.isRequired,
  tabIndex: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default CommentTab;
