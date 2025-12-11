import { useContext } from "react";
import { UsersContext } from "../contexts/users.context";

export default function CousinComp() {
    const usersContext = useContext(UsersContext);

    return (
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Cousin Component</h2>
                <ul>
                    {usersContext.map((val) => <li key={val.id}>{val.id}. {val.name}</li>)}
                </ul>

            </div>
        </div>
    );
}
