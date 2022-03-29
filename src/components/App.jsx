import React from "react";
import { useState } from "react";
import Username from "./Username";
import Greeter from "./Greeter";
import { useEffect } from "react";

function Beans(){
    const [shouldLoaded, setShouldLoaded] = useState(false);

    useEffect(() => setTimeout(() => setShouldLoaded(true), 3000), []) 

    if(shouldLoaded === false){
        return (
            <>
            <header>Da Page is Loading</header>
            <button onClick={e => setShouldLoaded(true)}>Press Me!</button>
            </>
        )
        }else{
            return(
            <>
            <header>The Page has Loaded</header>
              <div>beans are working</div>
                <Greeter phrase="hello" name="Joseph" />
                <Greeter phrase="goodbye" name="Ervin Howell" />
                <Greeter phrase="Salutations" name="Eric" />
                <Username></Username>
    </>
            )
 }

   
}
export default Beans;