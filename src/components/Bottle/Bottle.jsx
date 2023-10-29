import "./Bottle.css"
const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price} = bottle
    return (
        <div className="box">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={handleAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;