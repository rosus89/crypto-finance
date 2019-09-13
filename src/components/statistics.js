import React from 'react';
import { Table, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core';
import PriceStat from './priceStat'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const mapCurrency = prop => prop.map(transaction => 
  ({
    exchange: transaction.from + "to" + transaction.to, 
    amount: transaction.amount,
    price: transaction.price
  })
)

const groupByExchange = groupBy('exchange');


function Statistics(props) {
  let output = <Typography>Two transactions of same currency are required.</Typography>
  let transactions = mapCurrency(props.transactions);

  
  let groupedTransactions = groupByExchange(transactions);
  let gt = groupedTransactions;

    if (props.transactions.length > 0) {
      output = (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell size="small">Currency</TableCell>
              <TableCell size="small">Min Price</TableCell>
              <TableCell size="small">Max Price</TableCell>
              <TableCell size="small">Average</TableCell>
            </TableRow>
          </TableHead>
          <PriceStat gt = {gt}></PriceStat>
        </Table>
      )
    }
  return (
    <Paper>
      {output}
    </Paper>
    )
}

export default Statistics;