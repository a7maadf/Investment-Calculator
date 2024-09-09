import React, { useEffect, useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function ValuesTable({
                                        initialInvestment,
                                        annualInvestment,
                                        expectedReturn,
                                        duration,
                                    }) {
    const [currentTableState, setTableState] = useState([]);

    useEffect(() => {
        const results = calculateInvestmentResults({
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration,
        });
        setTableState(results);
    }, [initialInvestment, annualInvestment, expectedReturn, duration]);

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {currentTableState.map((item, index) => (
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.totalInterest)}</td>
                    <td>{formatter.format(item.valueEndOfYear - item.totalInterest)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}