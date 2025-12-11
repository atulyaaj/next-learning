interface Hero {
  name: string;
  era: string;
  region?: string;
  kingdom?: string;
  known_for: string[];
  weapons: string[];
  photo: string;
}

interface HeroesResponse {
  heroes: Hero[];
}

export default async function Home() {

  const rawData = await fetch("http://localhost:3000/api/message");
  const heroData: HeroesResponse = await rawData.json();

  return (
    <div  className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Requests and Responses</h1>
      <hr className="mb-4" />

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Era</th>
              <th>Region / Kingdom</th>
              <th>Known For</th>
              <th>Weapons</th>
            </tr>
          </thead>
          <tbody>
            {heroData.heroes.map((hero, ind) => (
              <tr key={hero.name + ind}>
                <th>{ind + 1}</th>
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
    </div>
  );
}


/* returns a jsx or a view component
page.tsx / page.ts / page.jsx / page.js

returns model or a controller data
route.tsx / route.ts / route.jsx / route.js */


/* render the data in a table using daisyui */