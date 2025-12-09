import defaultStyles from "./mystyle.module.css";
import redStyles from "./mystylered.module.css";

let myStyle = null;

async function loadStyle() {
    if (true) {
        myStyle = await import("./mystyle.module.css");
    } else {
        myStyle = await import("./mystylered.module.css");
    }
}

loadStyle();

export default function ModuleComp() {
    return <div>
        <h1>Module Style</h1>
        <div className={defaultStyles.box}>Class Box</div>
    </div>
}