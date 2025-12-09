import ClassComp from "./components/classcomp";
import StyleComp from "./components/stylecomp";
import ModuleComp from "./components/moduleComp";

export default function Home() {

  return (
    <div>
      <StyleComp />
      <hr />
      <ClassComp />
      <hr />
      <ModuleComp />
    </div>
  );
}
