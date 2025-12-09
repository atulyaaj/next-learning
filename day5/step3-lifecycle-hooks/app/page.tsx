"use client";
import { useState } from "react";
import ChildComp from "./components/child";

export default function Home() {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Component Lifecycle Hooks</h1>
      <button onClick={() => setState(Math.round(Math.random() * 100))}>Change Version</button>
      <button onClick={() => setShow(!show)}>Toggle Component</button>
      {show && <ChildComp version={state} />}
    </div>
  );
}
