import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Navbar from "../components/navbar";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className="container-md" style={{ marginTop: 50 }}>
      <Navbar />
      <Typography className="hero" style={{ fontSize: "5rem", lineHeight: 1 }}>
        Custom software solutions tailored to your unique needs
      </Typography>
      <Typography style={{ fontSize: "1.2rem", marginTop: 40, maxWidth: 1000 }}>
        Expertise... experience / since 2010, rapid prototyping, MVPs, SAAS,
        proof of concepts, customer engagement, sales analytics
      </Typography>
      <Typography variant="h4" style={{ marginTop: 40 }}>
        Clients / Industries
      </Typography>
      <Typography style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}>
        Siemens, Wesco, Rittal, ...
      </Typography>
      <Typography variant="h4" style={{ marginTop: 40 }}>
        Attitude
      </Typography>
      <Typography style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}>
        Friendly, ethical, constant communication...
      </Typography>
      <Typography variant="h4" style={{ marginTop: 40 }}>
        Methodology
      </Typography>
      <Typography style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}>
        Agile, Scrum, ...
      </Typography>
      <Typography variant="h4" style={{ marginTop: 40 }}>
        Our Stack
      </Typography>
      <Typography style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}>
        Friendly, constant communication...
      </Typography>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
