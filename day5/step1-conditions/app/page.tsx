"use client";

import { useState } from "react";

export default function Home() {
  const [agree, setAgree] = useState(true);
  if (agree) {
    return <div>
      <h1>Conditional Rendering</h1>
      <h2>Show Status : True </h2>
      <button onClick={() => setAgree(!agree)}>Agree / Disagree</button>
    </div>
  }
  else {
    return <div>
      <h1>Conditional Rendering</h1>
      <h2>Show Status : False </h2>
      <button onClick={() => setAgree(!agree)}>Agree / Disagree</button>
    </div>
  }

}
