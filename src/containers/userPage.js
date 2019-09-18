import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Container, Box, CssBaseline } from '@material-ui/core';
import NewTransaction from '../components/new_transaction';
import Transactions from '../components/transactions';
import Statistics from '../components/statistics';
import TopBar from '../components/appBar';
import { getData, deleteTransaction } from '../actions'


function UserPage(props) {

    useEffect(() => {
        if (!props.dataFetched) {
            props.getData();
            props.setFetched(true)
        }
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
        </React.Fragment>
    )
}

export default connect(null, {getData,deleteTransaction})(UserPage)