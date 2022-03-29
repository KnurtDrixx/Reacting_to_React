import React from "react";
import {useState} from "react"
//function Corn(){}
    //return <input type="text" />
    function Pizza() {
        const [topping, setTopping] = useState('');
        
        return <div>
            <input value={topping} onChange={(e) => setTopping(e.target.value)} />
            <p>You are logging in as {topping}</p>
             </div>
    }

export default Pizza;