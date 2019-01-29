import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Fab } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/EmailRounded";

const styles = theme => ({
  logoClass: {
    fontFamily: '"Maven Pro", "Roboto", sans-serif',
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "36px",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50
  },
  grow: {
    flexGrow: 1
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.grow}>
        <Link prefetch href="/">
          <a className="logo" className={classes.logoClass}>
            shopilab
          </a>
        </Link>
      </div>
      <Link prefetch href="/contact">
        <Fab variant="extended" aria-label="Get in touch" color="primary">
          <EmailIcon style={{ marginRight: 10 }} />
          Get in touch
        </Fab>
      </Link>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
