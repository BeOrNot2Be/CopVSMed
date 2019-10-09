import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';

const lastPosts = {
  1: [
    'http://digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg',
    'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/07/Aspect-ratio-photography-ras-ul-had-beach-Oman-1.jpg',
  ],
  2: [
    'https://cdn.tutsplus.com/photo/uploads/legacy/746_aspectratio/07.jpg',
    'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
  ],
  4: [
    'https://phlearn.com/wp-content/uploads/2019/03/dhruv-deshmukh-266273-unsplash-square.jpg',
    'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
    'https://res.cloudinary.com/avilonproductioncdn/image/upload/v1570005911/84247_PCHS_qrjynz.png',
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
}));

function PostCards () {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col md={6} className={classes.postImgCellBig}>
          <img className={classes.postImg} src={lastPosts[4][0]} alt="" />
        </Col>
        <Col sm={6}>
          <Container>
            <Row>
              <Col sm={12} className={`${classes.postImgCell} ${classes.postImgCellTop}`}>
                <img className={classes.postImg} src={lastPosts[2][0]} alt="" />
              </Col>
              <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellLeft}`}>
                <img className={classes.postImg} src={lastPosts[1][0]} alt="" />
              </Col>
              <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellRight}`}>
                <img className={classes.postImg} src={lastPosts[1][1]} alt="" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}


export default PostCards;
