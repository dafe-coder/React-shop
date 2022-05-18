const Cart = ({ quantity = 0, onBasketShow }) => {
	return (
		<div className='cart' onClick={onBasketShow}>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
};

export default Cart;
