import React from 'react';
import {Avatar,
        Button,
        CssBaseline,
        TextField, 
        FormControlLabel, 
        Checkbox, 
        Link, 
        Grid, 
        Typography, 
        makeStyles, 
        Container } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {auth} from '../firebase'


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [emailHint, setEmailHint] = React.useState(null);

    const [password, setPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordHint, setPasswordHint] = React.useState(null)

    function loginUser(){
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setEmail("")
            setPassword("")
        }).catch((error)=>{
            if (error.code === "auth/wrong-password"){
                setPasswordHint("Invalid password.");
                setPasswordError(true);
            }
            else {
                setEmailHint("Account does not exist.");
                setEmailError(true);
            }
        })
    };

    function handleEmail(e) {
        setEmail(e.target.value)
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange = {(e) => { setEmail(e.target.value)}}
                        error = {emailError}
                        helperText={emailHint}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" 
                        onChange = {(e) => { setPassword(e.target.value)}}
                        error = {passwordError}
                        helperText = {passwordHint}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={loginUser}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link 
                                variant="body2"
                                onClick= {()=>{props.setPage("signUp")}}
                                >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}