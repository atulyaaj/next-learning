interface Props {
    title: string,
    children: React.ReactNode;
}
export default function ChildComp(props: Props) {
    return <div>
        <h2>{props.title}</h2>
        <hr />
        <div
            style={{
                backgroundColor: "slategray",
                padding: "10px",
                border: "1px solid black"
            }}
        >
            {props.children}
        </div>
    </div>
}