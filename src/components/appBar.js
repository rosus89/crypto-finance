import React from 'react';
import {AppBar, Toolbar, makeStyles, IconButton, Menu, MenuItem, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {auth} from '../firebase';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flex: 1,
    }
}));

function TopBar(){

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return(
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography 
                        variant="h5"
                        className={classes.title}
                >Crypto Finance</Typography>
                    <div>
                        <IconButton
                            
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Typography align="center">{auth.currentUser.email}</Typography>
                            <MenuItem onClick={()=>{auth.signOut()}}>Sign Out</MenuItem>
                        </Menu>
                    </div>
            </Toolbar>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    )
}

export default TopBar;