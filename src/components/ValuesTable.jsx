import {calculateInvestmentResults} from '../util/investment.js'
import {useState} from "react";

export default function ValuesTable() {
    const intialStateForUseState = [
        {
            "year": 0,
            "interest": 0,
            "valueEndOfYear": 0,
            "annualInvestment": 0
        }
    ]


    // const [currentTableState, setTableState] = useState(intialState)

    return (
        <>
            <table id="result">

                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>City</th>
                    </tr>
                </thead>

            </table>
        </>
    )
}