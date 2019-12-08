import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    textAlign: "center",
    width: "410px",
    fontSize: "1rem",
    letterSpacing: 2,
    fontWeight: 700,
    color: "rgba(51, 51, 51, 0.7)"
  }
};

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: "70px"
  },
  mailIcon: {
    color: "#ff4c4c",
    fontSize: "3rem"
  },
  linkedinIcon: {
    color: "#0072b1",
    fontSize: "3rem"
  },
  phoneIcon: {
    fontSize: "200px",
    color: "#0084b4"
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container justify="center" spacing={3}>
      <Grid key={"image"} item>
        <PhoneIcon className={classes.phoneIcon} />
      </Grid>
      <Grid key={"contact"} item>
        <div style={styles.container}>
          <div>
            Feel free to drop me a mail if you want to collaborate or just want
            to say hi!
          </div>
          <div>
            <a href="mailto:tanhangchawin@yahoo.com.sg">
              <EmailIcon className={classes.mailIcon} />
            </a>
          </div>
          <div>Alternatively, you can also drop me a message on linkedin</div>
          <div>
            {" "}
            <a href="https://www.linkedin.com/in/chawintan/" target="_blank">
              <LinkedInIcon className={classes.linkedinIcon} />
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Contact;
