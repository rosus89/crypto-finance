import React from 'react';
import {Container, Box} from '@material-ui/core';
import getData from './api';
import './App.css';

import NewTransaction from './containers/new_transaction';
import Transactions from './containers/transactions';
import Statistics from './containers/statistics';

function App() {
  const [transactions, setTransactions] = React.useState([]);
  // getData();
  const createTransaction = (from, to, amount, price) => {
    setTransactions([...transactions, { "from": from, "to": to, "amount": amount, "price": price }])
  }

  return (
    <Container fixed>
      <Box className="transaction">
      <NewTransaction createTransaction = {createTransaction} />
      </Box>

      <Transactions transactions = {transactions}/>

      <Statistics transactions = {transactions} />
    </Container>
  );
}

export default App;
