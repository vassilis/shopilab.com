import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Link from "next/link";
import { Fab } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/EmailRounded";

const styles = theme => ({});

class Index extends React.Component {
  state = {};

  render() {
    // const { classes } = this.props;

    return (
      <div className="container-md" style={{ marginTop: 50 }}>
        <Navbar />
        <Typography
          className="hero"
          style={{ fontSize: "4rem", lineHeight: 1 }}
        >
          Great user experience and outstanding customer support make
          extraordinary shops.
          <br /> You can count on us for the first!
        </Typography>
        <br />
        <br />
        <Link prefetch href="/contact">
          <Fab variant="extended" aria-label="Get in touch" color="primary">
            <EmailIcon style={{ marginRight: 10 }} />
            Get in touch
          </Fab>
        </Link>
        <div style={{ padding: "100px 0" }} />
      </div>
    );
  }
}

Index.propTypes = {
  // classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
