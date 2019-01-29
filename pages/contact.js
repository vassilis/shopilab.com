import React from "react";
import Navbar from "../components/navbar";
import TextField from "@material-ui/core/TextField";
import { Grid, Fab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/SendRounded";

class ContactPage extends React.Component {
  state = { firstName: "", lastName: "", message: "", email: "", phone: "" };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { firstName, lastName, email, phone, message } = this.state;
    return (
      <div className="container-md" style={{ marginTop: 50 }}>
        <Navbar />
        <div className="container" style={{ padding: "50px 24px" }}>
          <Typography variant="h2" className="hero" gutterBottom>
            <strong>Let's get started!</strong>
          </Typography>
          <br />
          <form
            name="contact"
            method="POST"
            netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <Grid container spacing={24}>
              <Grid item sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={this.handleChange("firstName")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={this.handleChange("lastName")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  value={phone}
                  onChange={this.handleChange("phone")}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
            <br />
            <TextField
              required
              id="message"
              name="message"
              label="What can we do for you?"
              multiline
              fullWidth
              rowsMax="10"
              value={message}
              onChange={this.handleChange("message")}
              margin="normal"
            />
            <Fab
              type="submit"
              variant="extended"
              color="primary"
              style={{ marginTop: 50 }}
            >
              <SendIcon style={{ marginRight: 10 }} />
              Submit
            </Fab>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
