import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const styles = makeStyles(theme => ({
    transactions:{
        minHeight: '300px'
    }
}));

function Transactions(props){
    let classes = styles();
    let output = <div>There are no transactions</div>;

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
                        {console.log(transaction)}
                        <TableCell size="small">{transaction.from.value}/{transaction.to.value}</TableCell>
                        <TableCell size="small">{transaction.amount} {transaction.to.value}</TableCell>
                        <TableCell size="small">{transaction.price} {transaction.from.value}</TableCell>
                        <TableCell size="small">{transaction.amount * transaction.price} {transaction.from.value}</TableCell>
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