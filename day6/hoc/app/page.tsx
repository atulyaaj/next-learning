import ClickPower from "./components/clickPower";
import MovePower from "./components/movePower";

export default function Home() {
  return (
    <div>
      <h1>Higher Order Components</h1>
      <ClickPower version={Math.round(Math.random()*100)} title={"Click using HOC"} />
      <hr />
      <MovePower version={Math.round(Math.random()*100)} title={"Move using HOC"} />
    </div>
  );
}
