import React from 'react';
import {Container, Box} from '@material-ui/core';
import './App.css';

import NewTransaction from './containers/new_transaction'
import Transactions from './containers/transactions'

function App() {
  const [transactions, setTransactions] = React.useState([]);

  const createTransaction = (from, to, amount, price) => {
    setTransactions([...transactions, { "from": from, "to": to, "amount": amount, "price": price }])
    console.log(transactions)
  }

  return (
    <Container fixed>
      <Box className="transaction">
      <NewTransaction createTransaction = {createTransaction} />
      </Box>

      <Transactions transactions= {transactions}/>
    </Container>
  );
}

export default App;
