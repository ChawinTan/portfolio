import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AppDrawer from "./Components/Drawer";
import Home from "./Components/Home";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    letterSpacing: 3,
    fontFamily: "Comic Sans MS",
    fontWeight: 500
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffa500" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            aria-label="menu"
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome!
          </Typography>
        </Toolbar>
      </AppBar>

      <AppDrawer open={drawer} onClose={handleCloseDrawer} />
      <Home />
    </div>
  );
}

export default App;
