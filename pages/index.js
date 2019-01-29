import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";

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
          style={{ fontSize: "3.5rem", lineHeight: 1 }}
        >
          Excellent user experience and outstanding customer support make
          extraordinary shops. You can count on us for the first!
        </Typography>
        <br />
        <br />
        <div style={{ padding: "100px 0" }} />
      </div>
    );
  }
}

Index.propTypes = {
  // classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
