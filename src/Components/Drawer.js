import React from 'react';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import NoteIcon from '@material-ui/icons/Note';
import CreateIcon from '@material-ui/icons/Create';
import ContactsIcon from '@material-ui/icons/Contacts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {
        minWidth: 240
    },
    listItemIcon: {
        color: '#0084b4'
    },
    listItemText: {
        color: 'rgba(51, 51, 51, 0.7)'
    },
    navigation: {
        fontWeight: 700,
        color: 'rgba(51, 51, 51, 0.7)'
    }
}));

function AppDrawer(props) {
    const classes = useStyles();
    const { open, onClose } = props;
    const navigationList = [
        <ListItem  key={0} >
            <ListItemIcon className={classes.listItemIcon}>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText
             className={classes.listItemText}
             disableTypography
             primary={'Home'}/>
        </ListItem>,

        <ListItem  key={1} >
            <ListItemIcon className={classes.listItemIcon}>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText
             className={classes.listItemText}
             disableTypography
             primary={'About'}/>
        </ListItem>,

        <ListItem  key={2} >
            <ListItemIcon className={classes.listItemIcon}>
                <NoteIcon />
            </ListItemIcon>
            <ListItemText
             className={classes.listItemText}
             disableTypography
             primary={'Resume'}/>
        </ListItem>,

        <ListItem  key={3} >
            <ListItemIcon className={classes.listItemIcon}>
                <CreateIcon />
            </ListItemIcon>
            <ListItemText
             className={classes.listItemText}
             disableTypography
             primary={'Portfolio'}/>
        </ListItem>,

        <ListItem  key={4} >
            <ListItemIcon className={classes.listItemIcon}>
                <ContactsIcon />
            </ListItemIcon>
            <ListItemText
             className={classes.listItemText}
             disableTypography
             primary={'Contact'}/>
        </ListItem>
    ];

    return (
        <div>
            <Drawer 
                open={open}
                onClose={onClose} >
                <List className={classes.list}>
                    <ListItem key={'navigation'}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText
                        disableTypography 
                        className={classes.navigation}
                        primary="Navigation"  />
                    </ListItem>
                </List>
                <Divider />

                {
                    navigationList.map((item) => {
                        return item;
                    })
                }
            </Drawer>
        </div>
    );
}

export default AppDrawer;
