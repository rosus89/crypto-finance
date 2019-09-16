import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Button } from '@material-ui/core';

const styles = makeStyles(theme => ({
    transactions:{
        minHeight: '300px',
        margin: '4px 0'
    }
}));

function Transactions(props){
    let classes = styles();
    let output = <Typography>There are no transactions</Typography>;

    if (props.transactions.length > 0) {
        output = (<Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell size="small">Currency</TableCell>
                    <TableCell size="small">Amount</TableCell>
                    <TableCell size="small">Price (unit)</TableCell>
                    <TableCell size="small">Total Cost</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.transactions.map((transaction, index) => (
                    <TableRow key={index}>
                        <TableCell size="small">{transaction.from}/{transaction.to}</TableCell>
                        <TableCell size="small">{transaction.amount} {transaction.to}</TableCell>
                        <TableCell size="small">{transaction.price} {transaction.from}</TableCell>
                        <TableCell size="small">{transaction.amount * transaction.price} {transaction.from}</TableCell>
                        <TableCell size="small"><Button onClick={()=>{props.deleteTransaction(transaction, index)}}>Delete</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>)
    }
    return (
        <Paper className={classes.transactions}>{output}</Paper>
    )
}

export default Transactions;