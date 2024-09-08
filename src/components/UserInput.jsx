export default function UserInput({children}) {
    return (
        <>
            <label>{children}</label>
            <input className="input" type="number"/>
        </>
    )
}