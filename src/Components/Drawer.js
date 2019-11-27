import React from 'react';
import Drawer from '@material-ui/core/Drawer';


function AppDrawer(props) {
    return (
        <Drawer open={props.open}>
            Hello
        </Drawer>
    );
}

export default AppDrawer;
