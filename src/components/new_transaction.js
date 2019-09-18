import React from 'react';
import {connect} from 'react-redux';
import SelectCurrency from './select_currency';
import Amount from './amount';
import {Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTransaction } from '../actions';

const styles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    padding: "1em",
    justifyContent: "flex-end"
  }
}));


let NewTransaction = (props) => {
  const classes = styles();
  const [amount, setAmount] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  const date = new Date();

  const handleNewTransaction = () =>{
    const newTransaction = { 
      "from":from.value,
      "to":to.value,
      "amount":amount,
      "price":price,
      "date":date
    }
    props.createTransaction(newTransaction)
  }

  return (
    <Paper>
    <form>
    <SelectCurrency 
                    from = {from}
                    to = {to}
                    setFrom = {setFrom}
                    setTo = {setTo}
    />
    <Amount
            amount = {amount}
            setAmount = {setAmount}
            price = {price}
            setPrice = {setPrice}
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

export default connect(null, {createTransaction}) (NewTransaction);