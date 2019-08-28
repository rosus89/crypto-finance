import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core';
import PriceStat from '../components/priceStat'

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
  let output = <Typography>Two transactions of same currency are needed</Typography>
  let transactions = mapCurrency(props.transactions);

  
  let groupedTransactions = groupByExchange(transactions);
  let gt = groupedTransactions;
  let prices = {};
  let amounts = {};

  for (let [key] of Object.entries(gt)){
     prices[key] = [];
     console.log(prices)
     amounts[key] = [];
    }

  for (let [key, value] of Object.entries(gt)){
    for (let item of value){
      prices[key].push(item.price);
      amounts[key].push(item.amount)
    }
  }
  


    if (props.transactions.length > 0) {
      output = (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell size="small">Currency</TableCell>
              <TableCell size="small">Min Price</TableCell>
              <TableCell size="small">Max Price</TableCell>
              <TableCell size="small">Median</TableCell>
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