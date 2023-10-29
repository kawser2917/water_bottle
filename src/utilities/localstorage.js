const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem("cart")
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringField = JSON.stringify(cart)
    localStorage.setItem("cart",cartStringField)
}

const addToLS = id=>{
    const cart = getStoredCart()
    cart.push()
    saveCartToLS(cart)
}