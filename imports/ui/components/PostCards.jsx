import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-grid-system';
import {
  Button, Hidden, Typography, MobileStepper,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  card: {
    margin: '0px',
  },
  cardMobPhoto: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    margin: '0px',
  },
  cardMobPhotoContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '60%',
    float: 'left',
    height: '0',
    margin: '25px 0px',
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
  const [t, i18n] = useTranslation('translation');

  return (
    <>
      <Hidden smDown className={classes.root}>
        <Container>
          <Row>
            <Col md={6} className={classes.postImgCellBig}>
              {props.loaded ? (
                <Button variant="contained" href={`/posts/${props.posts[0].name[props.lang]}`} className={classes.button}>
                  <img className={classes.postImg} src={props.posts[0].img[4]} alt="" />
                </Button>
              ) : (
                <Skeleton height={555} className={classes.card} />
              )}
            </Col>
            <Col sm={6}>
              <Container>
                <Row>
                  <Col sm={12} className={`${classes.postImgCell} ${classes.postImgCellTop}`}>
                    {props.loaded ? (
                      <Button variant="contained" href={`/posts/${props.posts[1].name[props.lang]}`} className={classes.button}>
                        <img className={classes.postImg} src={props.posts[1].img[2]} alt="" />
                      </Button>
                    ) : (
                      <Skeleton height={270} className={classes.card} />
                    )}
                  </Col>
                  <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellLeft}`}>
                    {props.loaded ? (
                      <Button variant="contained" href={`/posts/${props.posts[2].name[props.lang]}`} className={classes.button}>
                        <img className={classes.postImg} src={props.posts[2].img[1]} alt="" />
                      </Button>
                    ) : (
                      <Skeleton height={255} className={classes.card} />
                    )}
                  </Col>
                  <Col sm={6} className={`${classes.postImgCell} ${classes.postImgCellRight}`}>
                    {props.loaded ? (
                      <Button variant="contained" href={`/posts/${props.posts[3].name[props.lang]}`} className={classes.button}>
                        <img className={classes.postImg} src={props.posts[3].img[1]} alt="" />
                      </Button>
                    ) : (
                      <Skeleton height={255} className={classes.card} />
                    )}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Typography className={`${classes.header} boldText`}>{t('general.posts')}</Typography>
        {props.loaded ? (
          <>
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
          </>
        ) : (
          <div className={classes.cardMobPhotoContainer}>
            <Skeleton className={classes.cardMobPhoto} />
          </div>
        )}
      </Hidden>
    </>
  );
};

const mapStateToProps = (state) => ({
  lang: state.general.lang,
  posts: state.postsElement.posts,
  loaded: (state.postsElement.posts.length === 4),
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => getPosts()(dispatch),
});

const PostCards = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostCardsComponent);


export default PostCards;
