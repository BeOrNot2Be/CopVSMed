import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { blue, red } from '@material-ui/core/colors';
import IconsList from './IconsList.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: red[800],
    },
  },
  iconCell: {
    textAlign: 'center',
  },
  imageIcon: {
    height: '100%',
  },
  iconRoot: {
    textAlign: 'center',
    minHeight: '220px',
    minWidth: '220px',
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const techs = [
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Adidas.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/NIKE-Full.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Puma.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Asics.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/New-Balance.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
    {
      icon: (
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/icon/Fila.svg" alt="" />
        </Icon>
      ),
      text: '',
    },
  ];

  return (
    <IconsList cells={techs} textClass="" />
  );
}
