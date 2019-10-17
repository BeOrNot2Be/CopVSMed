import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';

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

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'google.com',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'google.com',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    link: 'google.com',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'google.com',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'google.com',
  },
];

function PostCards () {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <>
      <Hidden smDown className={classes.root}>
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
      </Hidden>
      <Hidden mdUp>
        <Typography className={`${classes.header} boldText`}> Posts </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Button variant="contained" href={`/posts/${step.link}`} className={classes.button}>
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                </Button>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          classes={{ dot: classes.ProgressBar, dotActive: classes.ProgressBarActive, root: classes.SwitcherBar }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </Hidden>
    </>
  );
}


export default PostCards;
