import React from 'react';
import {auth, fb} from './firebase'
import firebase from 'firebase'


import Account from './containers/account'
import Loading from './containers/loading'
import UserPage from './containers/userPage'



function App() {

  // 
  // State
  // 

  const [transactions, setTransactions] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [dataFetched, setFetched] = React.useState(false)

  // 
  // Create new Transaction
  // 

  const createTransaction = (from, to, amount, price) => {
    const addedTransaction = { "from": from, "to": to, "amount": amount, "price": price }
    // adds transaction to state
    setTransactions([...transactions, addedTransaction ])
    //adds transaction to database
    fb.collection('users').doc(auth.currentUser.uid).update({
      transactions: firebase.firestore.FieldValue.arrayUnion(addedTransaction)
    })
  };

  // 
  // Change app state on user Login / Logout
  // 

  auth.onAuthStateChanged(function(user){
    if (user){
      setIsAuth(true);
      setLoaded(true);
      console.log("user signed in")
    }
    else {
      setIsAuth(false)
      setLoaded(true);
    }
  })

  //
  // Fetch Data from database
  //

  const getData = () => {
    fb.collection('users').doc(auth.currentUser.uid).get().then(doc => {
      let data = doc.data();
      console.log(data);
      setTransactions(data.transactions)
    }, [])
  };

  //
  // Change Change app state on user Login
  //

  if (isAuth){
   
  return (
    <UserPage createTransaction={createTransaction}
              transactions={transactions} 
              getData ={getData}
              setFetched={setFetched}
              dataFetched={dataFetched}
              />
  )
  }
  else if (loaded === true) {
    return (
      <Account setFetched={setFetched} />
    )
  }
  else {
    return (
      <Loading />
    )
  }
}

export default App;
