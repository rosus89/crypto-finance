import React from 'react';
import { connect } from 'react-redux';
import { Table, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';
import PriceStat from './priceStat';

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const mapCurrency = transactions => transactions.map(transaction => 
  ({
    exchange: transaction.from + " -> " + transaction.to, 
    amount: transaction.amount,
    price: transaction.price
  })
)

const groupByExchange = groupBy('exchange');


function Statistics(props) {
  let output = null;
  let transactions = mapCurrency(props.transactions);
  let groupedTransactions = groupByExchange(transactions);

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
          <PriceStat gt={groupedTransactions}></PriceStat>
        </Table>
      )
    }
  return (
    <Paper>
      {output}
    </Paper>
    )
}

function mapState(state) {
  return {
    transactions: state.transactions
  }
}

export default connect(mapState)(Statistics);