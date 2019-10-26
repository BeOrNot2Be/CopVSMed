import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import {
  Button, Hidden, Typography, MobileStepper,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Posts } from '../../api/schemas';


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

const lang = 'en';

const PostCards = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      {(props.posts.length === 4) ? (
        <>
          <Hidden smDown className={classes.root}>
            <Container>
              <Row>
                <Col md={6} className={classes.postImgCellBig}>
                  <Button variant="contained" href={`/posts/${props.posts[0].name[lang]}`} className={classes.button}>
                    <img className={classes.postImg} src={props.posts[0].img[4]} alt="" />
                  </Button>
                </Col>
                <Col sm={6}>
                  <Container>
                    <Row>
                      <Col sm={12} className={`${classes.postImgCell} ${classes.postImgCellTop}`}>
                        <Button variant="contained" href={`/posts/${props.posts[1].name[lang]}`} className={classes.button}>
                          <img className={classes.postImg} src={props.posts[1].img[2]} alt="" />
                        </Button>
                      </Col>
                      <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellLeft}`}>
                        <Button variant="contained" href={`/posts/${props.posts[2].name[lang]}`} className={classes.button}>
                          <img className={classes.postImg} src={props.posts[2].img[1]} alt="" />
                        </Button>
                      </Col>
                      <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellRight}`}>
                        <Button variant="contained" href={`/posts/${props.posts[3].name[lang]}`} className={classes.button}>
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
                <div key={post.name[lang]}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Button variant="contained" href={`/posts/${post.name[lang]}`} className={classes.button}>
                      <img className={classes.img} src={post.img.mob} alt={post.name[lang]} />
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
              classes={{
                dot: classes.ProgressBar,
                dotActive: classes.ProgressBarActive,
                root: classes.SwitcherBar,
              }}
              nextButton={(
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
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

export default withTracker((props) => {
  const handle = Meteor.subscribe('posts');
  //console.log(Posts.find({ img: { $exists: true } }).fetch());
  return {
    // currentUser: Meteor.user(),
    listLoading: !handle.ready(), //make nice sort and etc
    posts: Posts.find({ }, { limit: 4 }).fetch(),
  };
})(PostCards);
