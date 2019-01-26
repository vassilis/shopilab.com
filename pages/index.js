import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { Grid } from "@material-ui/core";
import Stack from "../components/stack";

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
          Bring your ideas and let’s work together to build something beautiful
        </Typography>
        <Typography
          color="primary"
          style={{
            fontSize: "1.6rem",
            fontWeight: 300,
            marginTop: 40,
            maxWidth: 1000
          }}
        >
          Get in touch and book a seat to the digital transformation journey!
        </Typography>
        <Typography
          style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}
        >
          Codefully is an agile team of software engineers who love to analyze
          business stories and know how to deliver optimal solutions. Some of
          our key services include custom application development, data
          analytics and reporting, business process management, cloud
          infrastructure implementation, and front-end design.
        </Typography>
        <Stack />
        <Grid container alignItems="stretch" spacing={16}>
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
