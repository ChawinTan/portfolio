import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import picture from "../Assets/fishing.jpg";

const useStyles = makeStyles(theme => ({
  cardMedia: {
    width: "225px",
    height: "400px"
  },
  descriptionGrid: {
    width: "410px"
  }
}));

const styles = {
  root: {
    fontFamily: "Comic Sans MS",
    marginTop: "30px"
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "rgba(51, 51, 51, 0.7)"
  },
  caption: {
    color: "rgba(51, 51, 51, 0.7)"
  },
  description: {
    color: "rgba(51, 51, 51, 0.9)"
  }
};

function About() {
  const classes = useStyles();
  return (
    <div style={styles.root}>
      <Grid container justify="center" spacing={3}>
        <Grid key={"image"} item>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Fisherman"
              image={picture}
              title="Thats me!"
            />
          </Card>
        </Grid>

        <Grid className={classes.descriptionGrid} key={"description"} item>
          <div style={styles.name}>{`<--- That's Me!`}</div>
          <div style={styles.caption}>
            Offically diagnose with the programming bug
          </div>
          <div style={styles.description}>
            <p>
              Hi! My name is Chawin and I hail from sunny Singapore. I am
              capable of full stack development and am particularly interested
              in Front end technologies.
            </p>
            <p>
              Outside of programming and software development, I also have a
              wide variety on interests. Playing the violin is my other passion
              and I hope to join a community orchestra one day and perhaps, own
              my own antique violin collection! I enjoy fishing during my spare
              time too (as you can tell).
            </p>
            <p>
              When I am not too caught up at work, I spend time contributing to
              open source projects and reading up books that interest me.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
