import boxStyle from "../boxStyle";

export default function StyleComp() {
    const extBox = boxStyle;
    return <div>
        <h1>Component Styles</h1>
        {/*
          Inline Style
          Infile Style
          External Style
          App /Global Style
          Style Modules
    */}
        <div style={extBox}>
            I am a box
        </div>
        <div style={{ ...extBox, "backgroundColor": "orange" }}>
            I am a box
        </div>
        <div style={{ ...extBox, "backgroundColor": "darkseagreen" }}>
            I am a box
        </div>
    </div>
}