"use client";
import WithPower from "../hoc/withPower";

interface Props {
    power: number;
    increase(): void;
    title: string;
    version: number;
}

function ClickPower(props: Props) {
    return <div style={{ width: "600px", border: "2px solid grey", padding: "10px", margin: "10px" }}>
        <h1>{props.title} Version: {props.version}</h1>
        <h2>Power is {props.power}</h2>
        <button onClick={props.increase}>Increase Power</button>
        {/* <button onClick={decrease}>Decrease Power</button> */}
    </div>
}

export default WithPower(ClickPower);