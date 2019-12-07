import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import WorkIcon from "@material-ui/icons/Work";
import CodeIcon from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#0084b4"
  },
  heading: {
    fontWeight: 700,
    color: "rgba(51, 51, 51, 0.7)"
  }
}));

function Resume() {
  const classes = useStyles();
  const resumeItems = [
    {
      name: "Twilio Inc, Solutions Engineer : Jun 2019 - Present",
      text: [
        `✓ Built demos and answered customer's technical questions`,
        `✓ Technologies used: React, JavaScript, Flask, Python, Google Cloud`
      ]
    },
    {
      name: "DBS Bank, Software Engineer : Aug 2018 - Jun 2019",
      text: [
        "✓ Designed and implemented solutions at the full stack level",
        "✓ Successfully identified and resolve bugs",
        "✓ Technologies used: Spring, Java, Angular, TypeScript, Jenkins",
        "Amazon S3, MariaDB, SQL"
      ]
    },
    {
      name: "Zendesk, Software Engineer Intern : Jan 2018 - Jun 2018",
      text: [
        "✓ Implemented an SDK that is used by engineers to test their APIs",
        "✓ Maintained a 100% test coverage for the unit test",
        "✓ Technologies used: - GraphQL, React + Redux, Node.js, Javascript, unit testing"
      ]
    },
    {
      name: "DBS Bank, Software Engineer Intern : Aug 2018 - Jun 2019",
      text: [
        "✓ Implemented different machine learning models to predict CDS yield",
        "✓ Analyzed the accuracy between different models",
        "✓ Technologies used: Matlab, Machine learning, Python"
      ]
    }
  ];
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "Go (basic)", "SQL"]
    },
    {
      category: "Front End Frameworks/Libraries",
      items: ["React", "Redux", "Angular"]
    },
    {
      category: "Backend Framework/Libraries",
      items: ["Node.js", "Flask", "Spring Tool Suite"]
    },
    {
      category: "Mobile",
      items: ["Android Studio (basic)"]
    },
    {
      category: "Databases",
      items: ["MariaDB", "MongoDB"]
    },
    {
      category: "Tools and Infrastructure",
      items: ["Git", "GitHub", "BitBucket", "Jenkins", "AWS", "GCP"]
    }
  ];
  return (
    <div>
      <Grid container justify="space-evenly" spacing={3}>
        <Grid key={"workExp"} item>
          <List>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classes.heading}
                primary="Work Experience"
              />
            </ListItem>
            <Divider />

            {resumeItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={item.name}
                      secondary={item.text.map((text, index) => {
                        return (
                          <React.Fragment key={index}>
                            {text}
                            <br />
                          </React.Fragment>
                        );
                      })}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        </Grid>

        <Grid key={"skills"} item>
          <List>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classes.heading}
                primary="Skills"
              />
            </ListItem>
            <Divider />

            {skills.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={item.category}
                      secondary={item.items.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            <br />
                          </React.Fragment>
                        );
                      })}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
