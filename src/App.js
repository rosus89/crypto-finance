import React from 'react';
import {Container, Box} from '@material-ui/core';
// import getData from './api';
import './App.css';
import {auth, fb} from './firebase'
import firebase from 'firebase'

import NewTransaction from './containers/new_transaction';
import Transactions from './containers/transactions';
import Statistics from './containers/statistics';
import TopBar from './components/appBar';
import Account from './containers/account'



function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [signedIn, setSignedIn] = React.useState(false)
  // getData();
  const createTransaction = (from, to, amount, price) => {
    const addedTransaction = { "from": from, "to": to, "amount": amount, "price": price }
    setTransactions([...transactions, addedTransaction ])
    fb.collection('users').doc(auth.currentUser.uid).update({
      transactions: firebase.firestore.FieldValue.arrayUnion(addedTransaction)
    })
    
  }
  auth.onAuthStateChanged(function(user){
    if (user){
      setSignedIn(true);
      fb.collection('users').doc(user.uid).get().then(doc =>{
        let userData = doc.data();
        setTransactions(userData.transactions)
      })
    }
    else {
      setSignedIn(false);
    }
  })
  if (signedIn === true){
  return (
    <div>
    <TopBar/>
    <div className="spacer"></div>
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
