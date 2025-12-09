interface Props {
    title: string,
    list: string[]
}

export default function HeroComp(props: Props) {
    return <div>
        <h1>{props.title}</h1>
        <ol>
            {props.list.map((val, ind) => <li key={ind}>{val}</li>)}
        </ol>
    </div>
}