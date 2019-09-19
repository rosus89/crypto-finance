import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Box,
         Paper, 
         Typography, 
         Button,
         ExpansionPanel,
         ExpansionPanelSummary,
         ExpansionPanelDetails
        } from '@material-ui/core';

const styles = makeStyles(theme => ({
    transactions:{
        minHeight: '300px',
        margin: '4px 0'
    },

    date: {
        margin: "auto",
        paddingLeft: "0.5em"
    },

    flex25: {
        flexBasis: '25%',
        padding: "0 0.5em"
    },

    flex50: {
        flexBasis: '50%'
    },

    expansionDetails:{
        background: '#d4d2d2',
        padding: 0
    }
}));

function Transactions(props){
    let classes = styles();
    let output = <Typography>There are no transactions</Typography>;
    console.log(props.transactions)
    if (props.transactions.length > 0) {
        output = (
        <div>
                <Box display="flex" justifyContent="space-between">
                    <Typography className={classes.flex25}>Currency</Typography>
                    <Typography className={classes.flex25}>Amount</Typography>
                    <Typography className={classes.flex25}>Price (unit)</Typography>
                    <Typography className={classes.flex25}>Total Cost</Typography>
                </Box>
            <div>
                {props.transactions.map((transaction, index) => (
                    <ExpansionPanel key={index}>
                        <ExpansionPanelSummary>
                            <Box width={1} display="flex" justifyContent="space-between">
                                <Typography className={classes.flex25}>{transaction.from}/{transaction.to}</Typography>
                                <Typography className={classes.flex25}>{transaction.amount} {transaction.to}</Typography>
                                <Typography className={classes.flex25}>{transaction.price} {transaction.from}</Typography>
                                <Typography className={classes.flex25}>{transaction.amount * transaction.price} {transaction.from}</Typography>
                            </Box>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionDetails}>
                            <Typography className={clsx(classes.flex50, classes.date)}>{transaction.date}</Typography>
                            <Button className={classes.flex50} onClick={() => { props.deleteTransaction(transaction, index) }}>Delete</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>
        </div>)
    }
    return (
        <Paper className={classes.transactions}>{output}</Paper>
    )
}

function mapState(state) {
    return {
        transactions: state.transactions
    }
}

export default connect(mapState) (Transactions);