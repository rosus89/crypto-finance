import React from 'react';
import { makeStyles, CircularProgress, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
        color: "blue"
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    }
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.paper}>
            <CircularProgress size="5em" className={classes.progress} />
            </div>
        </Container>
    );
}