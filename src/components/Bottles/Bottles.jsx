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

    const handleAddToCart = bottle =>{
        console.log("Bottle going to be added")
    }
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}>

                    </Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;