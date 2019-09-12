import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {auth} from '../firebase';


function TopBar(){

    return(
        <React.Fragment>
        <AppBar position="absolute">
            <Toolbar>
                <Button
                    onClick={()=>{auth.signOut()}}
                >Sign Out
                </Button>
            </Toolbar>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    )
}

export default TopBar;