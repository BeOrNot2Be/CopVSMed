import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MailSharpIcon from '@material-ui/icons/MailSharp';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  helpInquiry: {
    backgroundColor: '#ff7270',
  },
  helpButton: {
    backgroundColor: '#623232',
    borderRadius: '0',
  },
}));

export default function helpInquiry() {
  const classes = useStyles();

  return (
    <div className={classes.helpInquiry}>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <MailSharpIcon />
                </Grid>
                <Grid item>
                  <Typography>
                    Looking for help?
                  </Typography>
                  <Typography>
                    Have any questions or need help with order? Let us know!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button className={classes.helpButton}>
                MAKE AN INQUIRY
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
