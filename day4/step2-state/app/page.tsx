"use client";

import { useRef, useState } from "react";

export default function Home() {

  // const message: string = "Welcome to Next Training!"
  // const avengers: string[] = ["Ironman", "Thor", "Hulk", "Spiderman"]

  const [message, setMessage] = useState("Welcome to Next Training!!");
  const [avengers, setAvengers] = useState(["Ironman", "Thor", "Hulk", "Spiderman"]);
  const [power, setPower] = useState(0);
  const [name, setName] = useState({ firstName: "Bruce", lastName: "Wayne" })


  let inputRef = useRef(0);

  return <div>
    <h1>Component State</h1>
    <hr />
    <h2>{message}</h2>
    <button onClick={() => setMessage("Message changed successfully!!")}>Change Message</button>
    <hr />

    <button onClick={() => setAvengers([...avengers, "New Hero"])}>Add Avenger</button>
    <ol>
      {avengers.map((avenger, ind) => <li key={ind}>{avenger}</li>)}
    </ol>
    <hr />

    <h3>Power is {power}</h3>
    <button onClick={() => setPower(power + 1)}>Add Power</button>
    <button onClick={() => setPower(power - 1)}>Remove Power</button>
    <input disabled defaultValue={power} type="range" min={0} max={10} />
    <br />
    <input value={power} onChange={(e) => setPower(Number(e.target.value))} type="range" />
    <br />
    <input ref={inputRef} defaultValue={power} type="number" />
    <button onClick={() => setPower(inputRef.current.value)}>Set Power</button>

    <hr />
    <h3>First Name: {name.firstName}</h3>
    <h3>Last Name: {name.lastName}</h3>
    <br />
    <label htmlFor="fName">First Name</label>
    <input
      type="text"
      id="fName"
      value={name.firstName}
      onChange={(e) => setName({ ...name, firstName: e.target.value })}
    />
    <br />
    <label htmlFor="lName">Last Name</label>
    <input
      type="text"
      id="lName"
      value={name.lastName}
      onChange={(e) => setName({ ...name, lastName: e.target.value })}
    />


  </div>
}