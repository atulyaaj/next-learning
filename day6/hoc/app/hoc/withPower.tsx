import { ElementType, useState } from "react";

export default function WithPower(OriginalComponent:ElementType){
    const Wrapper = (props) =>{
        const [power, setPower] = useState(0);
    
        const increase = () => {
            setPower(power + 1);
        }
        return <OriginalComponent {...props} power={power} increase={increase} />
    }
    return Wrapper;
}