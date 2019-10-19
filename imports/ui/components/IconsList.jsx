import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Box, Container, Typography,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: 'red[800]',
    },
  },
  iconCell: {
    textAlign: 'center',
  },
}));


const IconsList = (props) => {
  const {
    cells, textClass, ...other
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Box p={3}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
            {cells.map((element, key) => (
              <Grid className={classes.iconCell} item md={2} sm={4} xs={4} key={key}>
                {element.text ? (
                  <>
                    {element.icon}
                    <Typography className={textClass}>
                      {element.text}
                    </Typography>
                  </>
                ) : (
                  <>
                    {element.icon}
                  </>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};


IconsList.propTypes = {
  cells: PropTypes.any.isRequired,
  textClass: PropTypes.any.isRequired,
};

export default IconsList;
