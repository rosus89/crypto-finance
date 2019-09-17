import React from 'react';
import { AppBar, Toolbar, makeStyles, IconButton, Menu, MenuItem, Typography, Container } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { auth } from '../firebase';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  }

}));

function TopBar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Container className={classes.container}>
            <Typography
              variant="h5"
            >Crypto Finance
            </Typography>
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
                <MenuItem onClick={() => { auth.signOut() }}>Sign Out</MenuItem>
              </Menu>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default TopBar;