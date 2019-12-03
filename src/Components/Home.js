import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)"
  },
  about: {
    fontFamily: "Comic Sans MS",
    color: "rgba(51, 51, 51, 0.7)",
    fontSize: "1.5rem",
    letterSpacing: 2
  },
  intervals: {
    color: "#ffa500",
    fontStyle: "italic",
    fontWeight: 500
  },
  icons: {
    marginTop: "1rem"
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  linkedin: {
    color: "#0072b1"
  },
  github: {
    color: "#6e5494"
  },
  youtube: {
    color: "#c4302b"
  },
  facebook: {
    color: "#3b5998"
  }
}));

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Home() {
  const classes = useStyles();
  const personality = ["Developer", "Violinist", "Fisherman"];
  const icons = [
    <LinkedInIcon fontSize="large" className={classes.linkedin} />,
    <GitHubIcon fontSize="large" className={classes.github} />,
    <YouTubeIcon fontSize="large" className={classes.youtube} />,
    <FacebookIcon fontSize="large" className={classes.facebook} />,
    <InstagramIcon fontSize="large" />
  ];
  let [position, setPosition] = useState(0);

  useInterval(() => {
    if (position === 2) {
      position = 0;
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }, 1500);

  return (
    <div style={styles.container}>
      <div style={styles.about}>
        Hi! My name is Chawin and I am a{" "}
        <span style={styles.intervals}>{personality[position]}</span>
      </div>
      <div style={styles.about}>I build things on the internet</div>
      <div style={styles.icons}>
        <Grid className={classes.root} container justify="center" spacing={3}>
          {icons.map((value, index) => {
            return (
              <Grid key={index} item>
                {value}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
