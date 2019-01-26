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
  img130: {
    margin: 20,
    maxWidth: 130
  },
  img180: {
    margin: 20,
    maxWidth: 180
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.img130} src={LogoAws} alt="AWS" />
    <img className={classes.img130} src={LogoHeroku} alt="Heroku" />
    <img className={classes.img130} src={LogoNode} alt="Node" />
    <img className={classes.img130} src={LogoReact} alt="React" />
    <img className={classes.img130} src={LogoRedux} alt="Redux" />
    <img className={classes.img130} src={LogoRails} alt="Ruby on Rails" />
    <img className={classes.img180} src={LogoPostgres} alt="PostgreSQL" />
    <img className={classes.img180} src={LogoHighcharts} alt="Highcharts" />
  </div>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
