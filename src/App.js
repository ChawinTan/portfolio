import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: '40%',
    letterSpacing: 3,
    fontFamily: 'Comic Sans MS',
    fontWeight: 500

  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#ffa500'}} >
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
