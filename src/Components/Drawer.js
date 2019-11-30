import React from 'react';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {
        minWidth: 240
    }
}));

function AppDrawer(props) {
    const classes = useStyles();
    const { open, onClose } = props;
    const navigationItems = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];
    return (
        <div>
            <Drawer 
                open={open}
                onClose={onClose} >
                <List className={classes.list}>
                    <ListItem key={'navigation'}>
                        <ListItemText primary="Navigation"  />
                    </ListItem>
                </List>
                <Divider />

                {
                    navigationItems.map((item, index) => {
                        return <ListItem  key={index} ><ListItemText primary={item}/></ListItem>
                    })
                }
            </Drawer>
        </div>
    );
}

export default AppDrawer;
