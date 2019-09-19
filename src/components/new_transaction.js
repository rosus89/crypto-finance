import React from 'react';
import { connect } from 'react-redux';
import SelectCurrency from './select_currency';
import Amount from './amount';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTransaction, setAlert } from '../actions';

const styles = makeStyles(theme => ({
    buttonContainer: {
        display: "flex",
        padding: "1em",
        justifyContent: "flex-end"
    }
}));


let NewTransaction = (props) => {
    const classes = styles();
    const [amount, setAmount] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [from, setFrom] = React.useState(null);
    const [to, setTo] = React.useState(null);

    

    const resetForm = () => {
        setAmount("");
        setPrice("");
        setFrom(null);
        setTo(null);
    }
    const handleNewTransaction = () => {
        if (from === null || to === null) {
            props.setAlert("Error: Currencies are required")
        }
        else if (from.value === to.value) {
            props.setAlert("Error: Currencies can't be the same type.")
        }
        else if (amount <= 0 || price <=0){
            props.setAlert("Error: Amount & price must be greater than 0")
        }
        else {
            const date = new Date().toLocaleString();
            console.log(date)
            const newTransaction = {
                "from": from.value,
                "to": to.value,
                "amount": amount,
                "price": price,
                "date": date
            }
            props.createTransaction(newTransaction);
            resetForm();
        }
    }

    return (
        <Paper>
            <form>
                <SelectCurrency
                    from={from}
                    to={to}
                    setFrom={setFrom}
                    setTo={setTo}
                />
                <Amount
                    amount={amount}
                    setAmount={setAmount}
                    price={price}
                    setPrice={setPrice}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.saveButton}
                        onClick={handleNewTransaction}
                    >
                        Save
    </Button>
                </div>
            </form>
        </Paper>
    );
}

export default connect(null, { createTransaction, setAlert })(NewTransaction);