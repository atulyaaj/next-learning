"use client";
import { useRef, useState } from "react";
import ChildComp from "./components/childcomp/childcomp";

export default function Home() {
  const [value, setValue] = useState("Empty");
  const inputRef = useRef("");

  return (
    <div>
      <h1>Component Communication</h1>
      <fieldset>
        <legend>Send Message</legend>
        <h3>{value}</h3>
        <hr />
        <label htmlFor="txtip">Message: </label>
        <input ref={inputRef} id="txtip" type="text" />
        <button onClick={() => setValue(inputRef.current.value)}>Send</button>
        <ChildComp setValue={setValue} value={value} />
      </fieldset>
    </div>
  );
}
