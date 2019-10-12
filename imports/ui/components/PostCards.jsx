import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';

const lastPosts = {
  1: [
    {
      img: 'http://digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg',
      link: 'google',
    },
    {
      img: 'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/Aspect-ratio-photography-ras-ul-had-beach-Oman-1.jpg',
      link: 'google.com',
    },
  ],
  2: [
    {
      img: 'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
      link: 'google.com',
    },
  ],
  4: [
    {
      img: 'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
      link: 'google.com',
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '70px 0px',
  },
  gridList: {
    width: 1200,
    transform: 'translateZ(0)',
  },
  postImg: {
    width: '100%',
  },
  postImgCell: {
    padding: '0!important',
  },
  postImgCellLeft: {
    paddingTop: '15px!important',
    paddingRight: '15px!important',
  },
  postImgCellRight: {
    paddingTop: '15px!important',
    paddingLeft: '15px!important',
  },
  postImgCellTop: {
    paddingBottom: '15px!important',
  },
  postImgCellBig: {
    paddingLeft: '0px!important',
  },
  button: {
    padding: '0px!important',
  },
}));

function PostCards () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Row>
          <Col md={6} className={classes.postImgCellBig}>
            <Button variant="contained" href={`/posts/${lastPosts[4][0].link}`} className={classes.button}>
              <img className={classes.postImg} src={lastPosts[4][0].img} alt="" />
            </Button>
          </Col>
          <Col sm={6}>
            <Container>
              <Row>
                <Col sm={12} className={`${classes.postImgCell} ${classes.postImgCellTop}`}>
                  <Button variant="contained" href={`/posts/${lastPosts[2][0].link}`} className={classes.button}>
                    <img className={classes.postImg} src={lastPosts[2][0].img} alt="" />
                  </Button>
                </Col>
                <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellLeft}`}>
                  <Button variant="contained" href={`/posts/${lastPosts[1][0].link}`} className={classes.button}>
                    <img className={classes.postImg} src={lastPosts[1][0].img} alt="" />
                  </Button>
                </Col>
                <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellRight}`}>
                  <Button variant="contained" href={`/posts/${lastPosts[1][1].link}`} className={classes.button}>
                    <img className={classes.postImg} src={lastPosts[1][1].img} alt="" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default PostCards;
