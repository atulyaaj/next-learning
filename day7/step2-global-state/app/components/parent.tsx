import ChildComp from "./child";

export default function ParentComp() {
    return (
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Parent Component</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, quibusdam.</p>
            </div>
            <hr />
            <ChildComp />
        </div>
    );
}
