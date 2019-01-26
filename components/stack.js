import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import LogoRails from "../images/logo-rails.png";
import LogoPostgres from "../images/logo-postgresql.png";
import LogoHighcharts from "../images/logo-highcharts.png";
import LogoNode from "../images/logo-nodejs.png";
import LogoReact from "../images/logo-react.png";
import LogoRedux from "../images/logo-redux.png";
import LogoAws from "../images/logo-aws.png";
import LogoHeroku from "../images/logo-heroku.png";

const styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 50
  },
  img: {
    margin: 20,
    maxWidth: 130
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.img} src={LogoAws} alt="AWS" />
    <img className={classes.img} src={LogoHeroku} alt="Heroku" />
    <img className={classes.img} src={LogoNode} alt="Node" />
    <img className={classes.img} src={LogoReact} alt="React" />
    <img className={classes.img} src={LogoRedux} alt="Redux" />
    <img className={classes.img} src={LogoRails} alt="Ruby on Rails" />
    <img className={classes.img} src={LogoPostgres} alt="PostgreSQL" />
    <img className={classes.img} src={LogoHighcharts} alt="Highcharts" />
  </div>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
