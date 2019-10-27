import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import {
  Button, Hidden, Typography, MobileStepper,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

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
    width: '100%',
    height: 'auto',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  ProgressBar: {
    backgroundColor: '#fb9896',
  },
  ProgressBarActive: {
    backgroundColor: '#ff7270',
  },
  SwitcherBar: {
    marginBottom: '70px',
  },
  header: {
    color: '#623232',
    fontSize: '30px',
    textAlign: 'center',
    paddingBottom: '30px',
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PostCardsComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  React.useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <>
      {(props.posts.length === 4) ? (
        <>
          <Hidden smDown className={classes.root}>
            <Container>
              <Row>
                <Col md={6} className={classes.postImgCellBig}>
                  <Button variant="contained" href={`/posts/${props.posts[0].name[props.lang]}`} className={classes.button}>
                    <img className={classes.postImg} src={props.posts[0].img[4]} alt="" />
                  </Button>
                </Col>
                <Col sm={6}>
                  <Container>
                    <Row>
                      <Col sm={12} className={`${classes.postImgCell} ${classes.postImgCellTop}`}>
                        <Button variant="contained" href={`/posts/${props.posts[1].name[props.lang]}`} className={classes.button}>
                          <img className={classes.postImg} src={props.posts[1].img[2]} alt="" />
                        </Button>
                      </Col>
                      <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellLeft}`}>
                        <Button variant="contained" href={`/posts/${props.posts[2].name[props.lang]}`} className={classes.button}>
                          <img className={classes.postImg} src={props.posts[2].img[1]} alt="" />
                        </Button>
                      </Col>
                      <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellRight}`}>
                        <Button variant="contained" href={`/posts/${props.posts[3].name[props.lang]}`} className={classes.button}>
                          <img className={classes.postImg} src={props.posts[3].img[1]} alt="" />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <Typography className={`${classes.header} boldText`}> Posts </Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {props.posts.map((post, index) => (
                <div key={post.name[props.lang]}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Button variant="contained" href={`/posts/${post.name[props.lang]}`} className={classes.button}>
                      <img className={classes.img} src={post.img.mob} alt={post.name[props.lang]} />
                    </Button>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={4}
              position="static"
              variant="dots"
              activeStep={activeStep}
              classes={{
                dot: classes.ProgressBar,
                dotActive: classes.ProgressBarActive,
                root: classes.SwitcherBar,
              }}
              nextButton={(
                <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              )}
              backButton={(
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>
              )}
            />
          </Hidden>
        </>
      ) : (
        'loading'
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.general.lang,
    posts: state.postsElement.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => getPosts()(dispatch),
  };
};

const PostCards = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCardsComponent);


export default PostCards;
