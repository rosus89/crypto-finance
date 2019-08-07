import React from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    component: {
        display: 'flex',
        alignContent: 'stretch',
        padding: '1em',
        border: '1px solid rgba(130, 130, 130, 0.2)',
    },
    select: {
        flexGrow: 1
    },
    divider: {
        fontSize: '1.4em',
        margin : 'auto'
    }
}));

const options = [
    { label: 'BTC' },
    { label: 'ETH' },
    { label: 'EOS' },
    { label: 'DAI' }
].map(option => ({
    value: option.label,
    label: option.label,
}));



function Currency (props) {

    const classes = useStyles();
    return (
        <div className={classes.component}>
        <Select
            className= {classes.select}
            isClearable
            value= {props.from}
            onChange={(value) => {
                props.setFrom(value)
            }}
            options= {options}
            placeholder = "FROM"
        />
        <div className={classes.divider}> > </div>
        <Select
            className={classes.select}
            isClearable
                value={props.to}
            onChange={(value) => {
                props.setTo(value)
            }}
            options={options}
            placeholder="TO"
        />
        </div>
    )
}




export default Currency;