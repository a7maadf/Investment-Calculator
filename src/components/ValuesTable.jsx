import React, { useEffect, useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

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
                    <td>{item.valueEndOfYear}</td>
                    <td>{item.interest}</td>
                    <td>{item.totalInterest}</td>
                    <td>{item.valueEndOfYear - item.interest}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}