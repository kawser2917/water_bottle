import './Cart.css'
import PropTypes from 'prop-types'
const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
          <h4>Cart: {cart.length}</h4>
          <div className="cart-container">
            {
                cart.map(bottle=> <div key={bottle.id}>
                    <img key={bottle.id} src={bottle.img} alt="" />
                    <button onClick={()=> handleRemoveCart(bottle.id)}>Remove</button>
                </div> )
            }

          </div>
            
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired

}

export default Cart;