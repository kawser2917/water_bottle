import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])
    useEffect( ()=>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    // Get id from local storage
    useEffect(()=>{
        console.log(bottles.length)
        if(bottles.length>0){
            const storedCart = getStoredCart()
            // console.log(storedCart,bottles)
            const saveCart = []
            for(const id of storedCart){
                // console.log(id)
                const bottle = bottles.find(bottle=> bottle.id === id)
                // console.log(bottle)
                saveCart.push(bottle)
            }
            console.log(saveCart)
            setCart(saveCart)
        }
        
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id) 
    }
    const handleRemoveCart = id=>{
        const remainingCart = cart.filter(bottle => bottle.id!==id)
        setCart(remainingCart)
        removeFromLS(id)

    }
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
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