import React from 'react';
import CreatableSelect from 'react-select/creatable'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'


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


function SelectCurrency({ currencies, from, to, setFrom, setTo }) {
    const classes = useStyles();

    const options = currencies.map(option => ({
        value: option,
        label: option
    }));

    return (
        <div className={classes.component}>
        <CreatableSelect
            className= {classes.select}
            isClearable
            value= {from}
            onChange={(value) => {setFrom(value)}}
            options= {options}
            placeholder = "FROM"
        />
        <div className={classes.divider}> > </div>
        <CreatableSelect
            className={classes.select}
            isClearable
            value={to}
            onChange={(value) => {setTo(value)}}
            options={options}
            placeholder="TO"
        />
        </div>
    )
}

const mapState = (state, ownProps) => {
    const { from, to, setFrom, setTo } = ownProps;
    return {
        currencies : state.currencies,
        from,
        to,
        setFrom,
        setTo 
    }
}


export default connect(mapState)(SelectCurrency);