"use client";

import { useState } from "react";
import ChildComp from "./components/child";
import HeroComp from "./components/hero";

export default function Home() {
  const [power, setPower] = useState(0);
  const [info, setInfo] = useState({
    titles: ["Avengers", "Justice League", "Indic Heroes"],
    avengers: ["Ironman", "Hulk", "Thor"],
    justiceLeague: ["Batman", "Wonder Women", "Flash"],
    indicHeroes: ["Shaktiman", "Chota Bheem", "Mighty Raju"],
  })



  return <div>
    <h1>Props in NextJs</h1>
    <input type="range" min={0} max={10} step={1} value={power} onChange={(e) => setPower(Number(e.target.value))} />

    <ChildComp title="First Child Component">
      <h3>Power is {power}</h3>
      <br />
      <h2>Title</h2>
      <button>Click Me</button>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur itaque incidunt suscipit.
        Enim ut voluptate consequatur iste eius, pariatur possimus facere dicta aliquam nisi quas facilis, perspiciatis, temporibus et voluptas.
      </div>
    </ChildComp>

    <ChildComp title="Second Children Component">
      <h3>Power is {power}</h3>
      <br />
      <h2>Title</h2>
      <button>Click Me</button>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur itaque incidunt suscipit.
        Enim ut voluptate consequatur iste eius, pariatur possimus facere dicta aliquam nisi quas facilis, perspiciatis, temporibus et voluptas.
      </div>
    </ChildComp>

    <hr />

    <HeroComp title={info.titles[0]} list={info.avengers} />
    <HeroComp title={info.titles[1]} list={info.justiceLeague} />
    <HeroComp title={info.titles[2]} list={info.indicHeroes} />

  </div>
}