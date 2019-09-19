import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Container, Box, CssBaseline } from '@material-ui/core';
import NewTransaction from '../components/new_transaction';
import Transactions from '../components/transactions';
import Statistics from '../components/statistics';
import TopBar from '../components/appBar';
import { getData, deleteTransaction } from '../actions';
import Alert from '../components/alert'


function UserPage(props) {

    useEffect(() => {
            props.getData();
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <Container component="main">
                <Box className="transaction">
                    <NewTransaction createTransaction={props.createTransaction} currencies={props.currencies}/>
                </Box>

                <Transactions transactions={props.transactions}
                              deleteTransaction={props.deleteTransaction}
                />

                <Statistics />
            </Container>
            <Alert />
        </React.Fragment>
    )
}

export default connect(null, {getData,deleteTransaction})(UserPage)