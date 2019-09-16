import React from 'react';
import CreatableSelect from 'react-select/creatable'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    component: {
        display: 'flex',
        alignContent: 'stretch',
        padding: '1em',
        border: '1px solid rgba(130, 130, 130, 0.2)',
        marginTop: '1em'
    },
    select: {
        flexGrow: 1,
        zIndex: 1001
    },
    divider: {
        fontSize: '1.4em',
        margin : 'auto'
    }
}));





function Currency (props) {
    const classes = useStyles();

    const options = props.currencies.map(option => ({
        value: option,
        label: option
    }));

    return (
        <div className={classes.component}>
        <CreatableSelect
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
        <CreatableSelect
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