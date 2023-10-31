import PropTypes from 'prop-types'
import "./Bottle.css"
const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price} = bottle
    return (
        <div className="box">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;