import { useEffect } from "react";

export default function ChildComp({ version }) {
    { /* 
        mount : is component loaded 
        update : did the component get an update via prop / state
        unmount : was the component unmounted
    */
    }
    // was called when the component was mounted
    useEffect(() => {
        console.log("Child component was mounted");
    }, []);

    // was called when the component's version was changed
    useEffect(() => {
        console.log("Version was changed to ", version);
    }, [version]);

    // was called when the component was unmounted
    useEffect(() => {
        return () => {
            console.log("Component was unmounted");
        }
    }, []);

    /* useEffect(()=>{
       console.log("child component was mounted / updated")
       return ()=>{
           console.log("component was unmounted")
       }
   },[version]); */

    return <div>
        <h2>Child Component</h2>
        <h2>Version: {version}</h2>
    </div>
}