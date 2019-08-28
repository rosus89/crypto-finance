import React from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    component: {
        display: 'flex',
        alignContent: 'stretch',
        padding: '1em',
        border: '1px solid rgba(130, 130, 130, 0.2)',
    },
    amount: {
        flexGrow: 1,
        marginRight: '1em'
    },
    price: {
        flexGrow: 1,
    }

}));

function Amount(props){
    const classes = styles();
    return (
        <div className={classes.component}>
        <TextField
                variant="outlined"
                className= {classes.amount}
                label = 'Amount'
                type = 'number'
                onChange = {(e)=>{ props.setAmount(e.target.value)}}
                required
        />
        <TextField
                variant="outlined"
                className={classes.price}
                label = 'Price'
                type='number'
                onChange={(e) => { props.setPrice(e.target.value) }}
                required
        />
        </div>
    )
};

export default Amount;