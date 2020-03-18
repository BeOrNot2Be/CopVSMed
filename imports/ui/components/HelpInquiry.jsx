/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Hidden
} from "@material-ui/core";
import { MailSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { links } from "../text/links.js";

const useStyles = makeStyles(theme => ({
  helpInquiry: {
    backgroundColor: "#ff7270"
  },
  helpButton: {
    backgroundColor: "#623232",
    borderRadius: "0",
    color: "#ffffff",
    padding: "10px 16px",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(98,50,50,0.7)"
    }
  },
  HelpIcon: {
    color: "#ffffff",
    fontSize: "65px"
  },
  header: {
    color: "#ffffff",
    fontSize: "30px"
  },
  subHeader: {
    color: "#ffffff"
  },
  container: {
    paddingBottom: "60px",
    paddingTop: "60px"
  },
  helpButtonCell: {
    textAlign: "center"
  },
  TextBox: {
    paddingLeft: "32px!important"
  }
}));

const HelpInquiryComponent = (props, context) => {
  const classes = useStyles();
  const { t } = context;

  return (
    <div className={classes.helpInquiry}>
      <Box>
        <Container className={classes.container}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item md={9} sm={12} xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item md={2} sm={2} xs={2}>
                  <MailSharp className={classes.HelpIcon} />
                </Grid>
                <Grid item md={7} sm={9} xs={9} className={classes.TextBox}>
                  <Typography className={`${classes.header} lightboldText`}>
                    {t("help_button_header")}
                  </Typography>
                  <Typography className={`${classes.subHeader} lightText`}>
                    {t("help_button_secondary")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Grid item sm={12} xs={12} style={{ height: "50px" }} />
            </Hidden>
            <Grid
              item
              md={3}
              sm={12}
              xs={12}
              className={classes.helpButtonCell}
            >
              <Button
                onClick={() => navigate(links.brands.url)}
                className={`${classes.helpButton} lightboldText`}
              >
                {t("help_button")}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

HelpInquiryComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

const HelpInquiry = connect(null, null)(HelpInquiryComponent);

export default HelpInquiry;
