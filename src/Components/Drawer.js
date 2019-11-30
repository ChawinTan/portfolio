import React from 'react';
import Drawer from '@material-ui/core/Drawer';


function AppDrawer(props) {
    const { open, onClose } = props;
    return (
        <Drawer 
            open={open}
            onClose={onClose} >
            Hello
        </Drawer>
    );
}

export default AppDrawer;
