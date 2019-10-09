import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footerGap: {
    border: '1px solid #795151',
  },
}));

export default function GapBar() {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Container>
          <hr className={classes.footerGap} />
        </Container>
      </Box>
    </div>
  );
}
