import React, { useEffect } from 'react';
import { Container, Box, makeStyles, CssBaseline } from '@material-ui/core';
import NewTransaction from './new_transaction';
import Transactions from './transactions';
import Statistics from './statistics';
import TopBar from '../components/appBar';
import { auth, fb } from '../firebase'

export default function UserPage(props) {

  //
  // Fetch Data from database
  //

    const getData = () => {
        fb.collection('users').doc(auth.currentUser.uid).get().then(doc => {
            let data = doc.data();
            console.log(data);
            props.setTransactions(data.transactions)
        }, [])
    };
    
    useEffect(() => {
        if (!props.dataFetched) {
            getData();
            props.setFetched(true)
        }
    })
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <Container component="main">
                <Box className="transaction">
                    <NewTransaction createTransaction={props.createTransaction} />
                </Box>

                <Transactions transactions={props.transactions} />

                <Statistics transactions={props.transactions} />
            </Container>
        </React.Fragment>
    )
}