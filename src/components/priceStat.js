import React from 'react';
import {TableBody, TableRow, TableCell} from '@material-ui/core'

const calculate = {
    low: function (array) {
        return Math.min(...array)
    },
    high: function (array) {
        return Math.max(...array)
    },
    avg: function (array) {
        let sum = array.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
        return sum / array.length;

    }
}

function PriceStat(props) {
    let rows = [];
    let gt = props.gt;
    for (let [key, values] of Object.entries(gt)) {
        let prices = [];
        for (let item of values){
            prices.push(item.price)
        }
        let lowPrice = calculate.low(prices);
        let highPrice = calculate.high(prices);
        let avgPrice = calculate.avg(prices);
        
        rows.push(
        <TableRow key={key}>
            <TableCell size="small">{key}</TableCell>
            <TableCell size="small">{lowPrice}</TableCell>
            <TableCell size="small">{highPrice}</TableCell>
            <TableCell size="small">{avgPrice}</TableCell>
        </TableRow>
        )
    }
    
    return(
        <TableBody>       
            {rows}
        </TableBody>
    )

}

export default PriceStat;