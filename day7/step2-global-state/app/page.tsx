import GrandParentComp from "./components/grandparent";

export default function Home() {
  return (
    <div className="m-auto w-100">
      <h1>Global State</h1>
      <hr />
      <GrandParentComp />
    </div>
  );
}
