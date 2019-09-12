import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {auth} from '../firebase';


function TopBar(){

    return(
        <AppBar >
            <Toolbar>
                <Button
                    onClick={()=>{auth.signOut()}}
                >Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;