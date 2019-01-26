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
        <Link prefetch href="/">
          <a className="logo" style={{ margin: 0 }}>
            <img
              src={LogoIcon}
              style={{ height: 36, marginRight: 10 }}
              alt=""
            />
            codefully
          </a>
        </Link>
      </div>
      <Link prefetch href="products">
        <Button style={{ marginLeft: 10 }}>Services</Button>
      </Link>
      <Link prefetch href="products">
        <Button style={{ marginLeft: 10 }}>Products</Button>
      </Link>
      <Link prefetch href="work">
        <Button style={{ marginLeft: 10 }}>Work</Button>
      </Link>
      <Link prefetch href="about">
        <Button style={{ marginLeft: 10 }}>About</Button>
      </Link>
      <Link prefetch href="contact">
        <Button style={{ marginLeft: 20 }} variant="contained" color="primary">
          Contact
        </Button>
      </Link>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
