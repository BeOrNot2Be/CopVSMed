import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CommentTab from './CommentTab.jsx';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(https://static.makeuseof.com/wp-content/uploads/2019/03/typing-games-670x335.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  tabHeader: {
    boxShadow: 'none',
    backgroundColor: '',
  },
  reviewerName: {
    color: '#ffffff',
  },
  avater: {
    border: '2px solid #ffffff',
    width: '60px',
    height: '60px',
    marginBottom: '20px',
  },
  indicator: {
    display: 'none',
  },
  color: {
    backgroundImage: 'linear-gradient(rgba(98, 50, 50, 0.9) 10%, rgba(98, 50, 50, 1))',
    paddingTop: '70px',
    paddingBottom: '70px',
  },
}));

const Reviwes = [
  {
    stars: 4,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
  {
    stars: 5,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
  {
    stars: 4,
    img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    name: 'Tadjaoki Nabukagava',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dicta commodi ea tempora voluptatibus provident reprehenderit nulla beatae aspernatur eaque magnam dolores tenetur quis temporibus quia aliquam, nobis repudiandae quam?',
  },
];

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff7270',
  },
  iconHover: {
    color: '#ff7270',
  },
  iconEmpty: {
    color: '#ff7270',
  },
})(Rating);

const StyledTab = withStyles({
  selected: {
    color: '#ff7270',
  },
})(Tab);

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

export default function ReviesTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.color}>
        <AppBar position="static" className={classes.tabHeader}>
          <Tabs TabIndicatorProps={{ className: classes.indicator }} value={value} onChange={handleChange} centered aria-label="simple tabs example">
            {Reviwes.map((element, index) => (
              <StyledTab
                selected
                key={index}
                className="lightText middleText"
                icon={(
                  <>
                    <Avatar className={classes.avater} src={element.img} alt={element.name} />
                    <Typography className={`${classes.reviewerName} lightboldText`}>{element.name}</Typography>
                    <StyledRating
                      name={element.name}
                      value={element.stars}
                      getLabelText={getLabelText}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      readOnly
                    />
                  </>
                    )}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </AppBar>
        {Reviwes.map((element, index) => (
          <CommentTab value={value} tabIndex={index} key={index} review={element} />
        ))}
      </div>
    </div>
  );
}
