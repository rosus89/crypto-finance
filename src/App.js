import React from 'react';
import { auth } from './firebase';
import { connect } from 'react-redux';

import { authUser, setLoading } from './actions'

import Account from './containers/account'
import Loading from './containers/loading'
import UserPage from './containers/userPage'



function App({ isAuth, authUser, isLoading, setLoading }) {

  // 
  // Change app state on user Login / Logout
  // 

  auth.onAuthStateChanged(function (user) {
    if (user) {
      authUser(true);
      setLoading(true);
    }
    else {
      authUser(false)
      setLoading(true);
    }
  })



  if (isAuth) {
    return (
      <UserPage

      />
    )
  }
  else if (isLoading === true) {
    return (
      <Account  />
    )
  }
  else {
    return (
      <Loading />
    )
  }
}

function mapState(state) {
  return {
    isAuth: state.isAuth,
    isLoading: state.isLoading,
    dataFetched: state.dataFetched
  }
}


export default connect(mapState, { authUser, setLoading })(App);
