import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles,SetBottles] = useState([])
    useEffect( ()=>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => SetBottles(data))
    },[])
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;