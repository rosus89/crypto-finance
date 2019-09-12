import React, { useEffect } from 'react';
import { Container, Box, CssBaseline } from '@material-ui/core';
import NewTransaction from '../components/new_transaction';
import Transactions from '../components/transactions';
import Statistics from '../components/statistics';
import TopBar from '../components/appBar';


export default function UserPage(props) {

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
                    <NewTransaction createTransaction={props.createTransaction} />
                </Box>

                <Transactions transactions={props.transactions} />

                <Statistics transactions={props.transactions} />
            </Container>
        </React.Fragment>
    )
}