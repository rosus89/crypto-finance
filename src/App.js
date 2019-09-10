import React from 'react';
import {Container, Box} from '@material-ui/core';
// import getData from './api';
import './App.css';
import {auth} from './firebase'

import NewTransaction from './containers/new_transaction';
import Transactions from './containers/transactions';
import Statistics from './containers/statistics';
import TopBar from './containers/topbar';
import Account from './containers/account'



function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [signedIn, setSignedIn] = React.useState(false)
  // getData();
  const createTransaction = (from, to, amount, price) => {
    setTransactions([...transactions, { "from": from, "to": to, "amount": amount, "price": price }])
  }
  if (signedIn === true){
  return (
    <div>
    {/* <TopBar/> */}
    <Container fixed>
      <Box className="transaction">
      <NewTransaction createTransaction = {createTransaction} />
      </Box>

      <Transactions transactions = {transactions}/>

      <Statistics transactions = {transactions} />
    </Container>
    </div>
  );
  }
  else {
    return (
      <Account />
    )
  }
}

export default App;
