import { Dispatch, SetStateAction } from "react"

interface Props {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}
export default function ChildComp(props: Props) {
    // let defValue = props.value || "Default Value"
    return <div style={{
        backgroundColor: "silver",
        padding: '10px',
        margin: '10px',
        fontFamily: 'sans-serif',
        border: "1px solid darkslategrey"
    }}>
        <h2>Child Component</h2>
        <hr />
        <h3>Message is: {props.value}</h3>
        <input type="text" onInput={(e) => props.setValue(e.target.value)} />
    </div>
}