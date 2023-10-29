import "./Bottle.css"
const Bottle = ({bottle}) => {
    const {name,img,price} = bottle
    return (
        <div className="box">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    );
};

export default Bottle;