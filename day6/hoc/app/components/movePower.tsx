"use client";
import WithPower from "../hoc/withPower";

interface Props {
    power: number;
    increase(): void;
    title: string;
    version: number;
}

function MovePower(props: Props) {
    return <div style={{ width: "600px", border: "2px solid grey", padding: "10px", margin: "10px" }}>
        <h1>{props.title} Version: {props.version}</h1>
        <h2>Power is {props.power}</h2>
        <div onMouseMove={props.increase} style={{ fontFamily: "sans-serif", fontSize: "24px", width: "400px", textAlign: "center", lineHeight: "100px", height: "100px", background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)" }}>Increase Power</div>
    </div>
}

export default WithPower(MovePower);