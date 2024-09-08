import UserInput from "./UserInput.jsx";

export default function UserInputFrame (){
    return (
        <div id="user-input">
            <div className="input-group">
                <div className="inside-div-for-input">
                    <UserInput>INITIAL INVESTMENT</UserInput>
                </div>
                <div className="inside-div-for-input">
                    <UserInput>ANNUAL INVESTMENT</UserInput>
                </div>
            </div>
            <div className="input-group">
                <div className="inside-div-for-input">
                    <UserInput>EXPECTED RETURN</UserInput>
                </div>
                <div className="inside-div-for-input">
                    <UserInput>DURATION</UserInput>
                </div>
            </div>

        </div>
    )
}