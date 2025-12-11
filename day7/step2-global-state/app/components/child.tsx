import { useContext } from "react";
import { FamilyContext } from "../contexts/family.context";
import { UsersContext } from "../contexts/users.context";

export default function ChildComp() {

    const familyContext = useContext(FamilyContext);
    const usersContext = useContext(UsersContext);

    return (
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Child Component</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt quod veritatis voluptatum animi cum aliquid in dolorem, quisquam eligendi.
                </p>
                {/* <FamilyContext.Consumer>
                    {val => <h1 className="text-4xl font-bold">{val}</h1>}
                </FamilyContext.Consumer> */}
                <h1 className="text-4xl font-bold">{familyContext}</h1>
                <ul>
                    {usersContext.map((val) => <li key={val.id}>{val.id}. {val.name}</li>)}
                </ul>

            </div>
        </div>
    );
}
