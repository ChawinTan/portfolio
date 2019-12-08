import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import BuildIcon from "@material-ui/icons/Build";
import { makeStyles } from "@material-ui/core/styles";

import TwilioVideo from "../Assets/Twilio_video.JPG";

const useStyles = makeStyles(theme => ({
  buildIcon: {
    color: "#0084b4"
  },
  heading: {
    fontWeight: 700,
    color: "rgba(51, 51, 51, 0.7)"
  },
  cardMedia: {
    width: "300px",
    height: "200px"
  },
  link: {
    color: "#0084b4",
    fontFamily: "Comic Sans MS"
  }
}));

function Portfolio() {
  const classes = useStyles();
  const imageLinks = [
    { link: TwilioVideo, alt: "Twilio Video Kyc", title: "Twilio Video Kyc" }
  ];

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={3}
      >
        <Grid key={"title"} item>
          <List>
            <ListItem>
              <ListItemIcon className={classes.buildIcon}>
                <BuildIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                className={classes.heading}
                disableTypography
                primary="My Projects"
              />
            </ListItem>
          </List>
        </Grid>

        <Grid key={"projectList"} item>
          <Grid container justify="flex-start" spacing={10}>
            {imageLinks.map((link, index) => {
              return (
                <Grid key={index} item>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      alt={link.alt}
                      image={link.link}
                      title={link.title}
                    />
                    <CardContent>
                      <Link
                        disableTypography
                        className={classes.link}
                        href="https://video-view.tanhangchawin.now.sh/"
                      >
                        View
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
