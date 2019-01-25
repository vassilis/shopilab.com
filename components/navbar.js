import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button } from "@material-ui/core";
import LogoIcon from "../images/logo-icon-4.svg";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.grow}>
        <h1 className="logo" style={{ margin: 0 }}>
          <img src={LogoIcon} style={{ height: 40, marginRight: 10 }} alt="" />
          codefully.io
        </h1>
      </div>
      <Link prefetch href="about" style={{ marginLeft: 10 }}>
        <Button>Products</Button>
      </Link>
      <Link prefetch href="about" style={{ marginLeft: 10 }}>
        <Button>Work</Button>
      </Link>
      <Link prefetch href="about">
        <Button style={{ marginLeft: 10 }}>About</Button>
      </Link>
      <Link prefetch href="about">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: 20 }}
        >
          Start a Project
        </Button>
      </Link>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
