/* 'use client';
import { useEffect, useState } from "react";

interface IHero {
  id: number;
  name: string;
  era: string;
  region?: string;
  kingdom?: string;
  known_for: string[];
  weapons: string[];
  photo: string;
}

export default function Home() {
  const [heroes, setHeroes] = useState<IHero[]>([]);

  useEffect(() => {
    fetch("/api/heroes")
      .then((res) => res.json())
      .then((formattedData) => setHeroes(formattedData.heroes))
      .catch((err) => console.log("Error", err))
  }, [])

  return (
    <div>
      <h1>API calls in NextJs</h1>
      <ul>
        {heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
      </ul>
    </div>
  );
} */

import Image from "next/image";

interface IHero {
  id: number;
  name: string;
  era: string;
  region?: string;
  kingdom?: string;
  known_for: string[];
  weapons: string[];
  photo: string;
}

interface HeroesResponse {
  heroes: IHero[];
}

export default async function Home() {

  const rawData = await fetch(process.env.URL + "/api/heroes");
  const heroData: HeroesResponse = await rawData.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Requests and Responses</h1>
      <hr className="mb-4" />

      <div className="m-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-250">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Poster</th>
              <th>Name</th>
              <th>Era</th>
              <th>Region / Kingdom</th>
              <th>Known For</th>
              <th>Weapons</th>
            </tr>
          </thead>
          <tbody>
            {heroData.heroes.map((hero) => (
              <tr key={hero.id}>
                <th>{hero.id}</th>
                <td>
                  <Image alt="warrior" width={150} height={100} src={"/" + hero.photo} className="rounded-lg" />
                </td>
                <td>{hero.name}</td>
                <td>{hero.era}</td>
                <td>{hero.region ?? hero.kingdom}</td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {hero.known_for.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{hero.weapons.join(", ")}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Era</th>
              <th>Region / Kingdom</th>
              <th>Known For</th>
              <th>Weapons</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <form
        action={process.env.URL + "/api/heroes"}
        method="post"
      >
        <fieldset className="m-auto fieldset bg-base-200 border-base-300 rounded-box w-250 border p-4">
          <legend className="fieldset-legend">Add Hero</legend>
          <div className="flex justify-center">
            <div className="join">
              <input type="text" name="uName" id="uName" className="input join-item" placeholder="Hero name" />
              <button className="btn join-item">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}