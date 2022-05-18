import BasketItem from './basketItem';
function BasketList({ order, onRemoveItem, onIncrease, onDecrease }) {
	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);
	return (
		<ul className='collection'>
			<li href='#!' className='collection-item active'>
				Ваш заказ!
			</li>
			{order.length ? (
				order.map((item) => {
					return (
						<BasketItem
							onRemoveItem={onRemoveItem}
							{...item}
							key={item.id}
							onIncrease={onIncrease}
							onDecrease={onDecrease}
						/>
					);
				})
			) : (
				<li href='#!' className='collection-item'>
					Корзина пуста
				</li>
			)}
			<li href='#!' className='collection-item active'>
				Общая стоимость: {totalPrice} грн.
			</li>
		</ul>
	);
}

export default BasketList;
