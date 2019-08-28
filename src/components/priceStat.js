import React from 'react';
import {TableBody, TableRow, TableCell} from '@material-ui/core'

const calculate = {
    low: function (array) {
        return Math.min(...array)
    },
    high: function (array) {
        return Math.max(...array)
    },
    median: function (array) {
        let sum = array.reduce((a, b) => a + b, 0);
        return sum / array.length;
    }
}

function PriceStat(props) {
    let rows = [];
    let gt = props.gt
    for (let [key, value] of Object.entries(gt)) {
        console.log(value);
        let cheapest = calculate.low(value);
        console.log(cheapest)
        rows.push(
        <TableRow key={key}>
            <TableCell size="small">{key}</TableCell>

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