"use client";
import { useEffect, useRef, useState } from "react";
import ParentComp from "./parent";
import { FamilyContext } from "../contexts/family.context";
import { UsersContext } from "../contexts/users.context";
import CousinComp from "./cousin";

export default function GrandParentComp() {
    const [message, setMessage] = useState("Default Message");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // setUsers([{
        //     "id": 1,
        //     "name": "Atulya"
        // }])

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log("Error:", err))
    }, []);

    const inputRef = useRef(null);

    return (
        <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Grand Parent Component</h2>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <input ref={inputRef} type="text" placeholder="enter new message" required />
                        </label>
                        <div className="validator-hint hidden">Enter New Message</div>
                    </div>
                    <button onClick={() => setMessage(inputRef.current.value)} className="btn btn-neutral join-item">Send</button>
                </div>
            </div>
            <hr />
            <UsersContext.Provider value={users}>
                <FamilyContext.Provider value={message}>
                    <ParentComp />
                </FamilyContext.Provider>
                <CousinComp />
            </UsersContext.Provider>
        </div>
    );
}
