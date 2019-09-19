import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addCurrency } from '../actions'

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
        margin: 'auto'
    }
}));


function SelectCurrency({ currencies, from, to, setFrom, setTo, addCurrency }) {
    const classes = useStyles();

    const options = currencies.map(option => ({
        value: option,
        label: option
    }));

    const handleChangeFrom = (value) => {
        setFrom(value);
    }

    const handleChangeTo = (value) => {
        setTo(value);
    }

    const handleOnCreateFrom = (value) => {
        const currency =value.toUpperCase();
        addCurrency(currency);
        handleChangeFrom(currency);
    }
    const handleOnCreateTo = (value) => {
        const currency = value.toUpperCase();
        addCurrency(currency);
        handleChangeTo(currency)
    }

    return (
        <div className={classes.component}>
            <CreatableSelect
                className={classes.select}
                isClearable
                value={from}
                onChange={handleChangeFrom}
                options={options}
                placeholder="FROM"
                onCreateOption={handleOnCreateFrom}
            />
            <div className={classes.divider}> > </div>
            <CreatableSelect
                className={classes.select}
                isClearable
                value={to}
                onChange={handleChangeTo}
                options={options}
                placeholder="TO"
                onCreateOption={handleOnCreateTo}
            />
        </div>
    )
}

const mapState = (state, ownProps) => {
    const { from, to, setFrom, setTo } = ownProps;
    return {
        currencies: state.currencies,
        from,
        to,
        setFrom,
        setTo
    }
}


export default connect(mapState, {addCurrency})(SelectCurrency);