import React, {useState} from "react";
import UserInput from "./UserInput";
import ValuesTable from "./ValuesTable";

export default function UserInputFrame() {
    const [inputs, setInputs] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const handleChange = (event, name) => {
        setInputs({...inputs, [name]: parseFloat(event.target.value) || 0});
    };

    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <div className="inside-div-for-input">
                        <UserInput
                            label="INITIAL INVESTMENT"
                            value={inputs.initialInvestment}
                            onChange={(e) => handleChange(e, "initialInvestment")}
                        />
                    </div>
                    <div className="inside-div-for-input">
                        <UserInput
                            label="ANNUAL INVESTMENT"
                            value={inputs.annualInvestment}
                            onChange={(e) => handleChange(e, "annualInvestment")}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="inside-div-for-input">
                        <UserInput
                            label="EXPECTED RETURN"
                            value={inputs.expectedReturn}
                            onChange={(e) => handleChange(e, "expectedReturn")}
                        />
                    </div>
                    <div className="inside-div-for-input">
                        <UserInput
                            label="DURATION"
                            value={inputs.duration}
                            onChange={(e) => handleChange(e, "duration")}
                        />
                    </div>
                </div>

            </div>
            <ValuesTable {...inputs} />
        </>
    );
}