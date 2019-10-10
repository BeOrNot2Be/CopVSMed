import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
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
    backgroundImage: 'url(https://static.makeuseof.com/wp-content/uploads/2019/03/typing-games-670x335.jpg)'
  },
  tab: {
    backgroundColor: '',
    color: 'black',
  },
  tabHeader: {
    boxShadow: 'none',
    backgroundColor: 'rgba(98, 50, 50, 0.7)',
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

export default function ReviesTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabHeader}>
        <Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example" className={classes.tab}>
          {Reviwes.map((element, index) => (
            <Tab className="lightText middleText" icon={<Avatar src={element.img} alt={element.name} />} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {Reviwes.map((element, index) => (
        <CommentTab value={value} tabIndex={index} key={index} review={element} />
      ))}
    </div>
  );
}
