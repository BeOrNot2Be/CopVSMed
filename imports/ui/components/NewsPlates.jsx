import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NewsPlate from './NewsPlate.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const news = [
  {
    date: 'DEC 27, 2017',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    commentsNum: 24,
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    date: 'DEC 27, 2017',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    commentsNum: 24,
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    date: 'DEC 27, 2017',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVsKAUwlX2LnBi4WUtwyHS3F8EeR4JmYLlALSnl9EKAhbBxfP',
    commentsNum: 24,
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

export default function NewsPlates() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
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
            <Grid item>
              <NewsPlate post={news[0]} />
            </Grid>
            <Grid item>
              <NewsPlate post={news[0]} />
            </Grid>
            <Grid item>
              <NewsPlate post={news[0]} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
