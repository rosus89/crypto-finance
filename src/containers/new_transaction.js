import React from 'react';
import Currency from '../components/currency';
import Amount from '../components/amount';
import {Button, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    padding: "1em",
    justifyContent: "flex-end"
  }
}));


let NewTransaction = (props) => {
  const classes = styles();
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);
  const [amount, setAmount] = React.useState(null);
  const [price, setPrice] = React.useState(null);



  return (
    <Paper>
    <form>
    <Currency
              from = {from}
              setFrom = {setFrom}
              to = {to}
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
              onClick={() => props.createTransaction(from.value, to.value, amount, price)}
      >
            Save
    </Button>
    </div>
      </form>
    </Paper>
  );
}

export default NewTransaction;