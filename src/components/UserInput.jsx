import React from "react";

export default function UserInput({ label, onChange, value }) {
    return (
        <>
            <label>{label}</label>
            <input
                className="input"
                type="number"
                onChange={onChange}
                value={value}
            />
        </>
    );
}