import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { Grid } from "@material-ui/core";

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
          style={{ fontSize: "5rem", lineHeight: 1 }}
        >
          Let’s work together to bring your digital product ideas to life!
        </Typography>
        <Typography
          style={{ fontSize: "1.4rem", marginTop: 40, maxWidth: 1000 }}
        >
          Codefully is a lean team of software engineers who love to analyze
          business stories and come up with straignt forward software solutions.
        </Typography>
        <Grid container spacing={24} style={{ marginTop: 100 }}>
          <Grid item sm={4}>
            <Card />
          </Grid>
          <Grid item sm={4}>
            <Card />
          </Grid>
          <Grid item sm={4}>
            <Card />
          </Grid>
          <Grid item sm={4}>
            <Card />
          </Grid>
          <Grid item sm={4}>
            <Card />
          </Grid>
          <Grid item sm={4}>
            <Card />
          </Grid>
        </Grid>
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
