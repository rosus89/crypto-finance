import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, Slide } from '@material-ui/core';
import { closeAlert } from '../actions';



function SlideDown(props) {
    return <Slide {...props} direction="down" />;
}

function Alert(props) {
    return (
       <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'}}
                open = { props.open }
                onClose = {props.closeAlert}
                message = {props.msg}
                autoHideDuration = {2000}
                TransitionComponent={SlideDown}
        />
    )
}

function mapState (state) {
    return {
        open: state.alert.open,
        msg: state.alert.msg
    }
}

export default connect(mapState, {closeAlert})(Alert)