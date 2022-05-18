function BasketItem({
	id,
	name,
	price,
	quantity,
	onRemoveItem,
	onIncrease,
	onDecrease,
}) {
	return (
		<li href='#!' className='collection-item'>
			{name} x{' '}
			<button className='count-btn' onClick={() => onDecrease(id)}>
				-
			</button>
			{quantity}
			<button className='count-btn' onClick={() => onIncrease(id)}>
				+
			</button>{' '}
			= {price * quantity} грн.
			<a
				href='#!'
				className='secondary-content'
				onClick={() => onRemoveItem(id)}>
				<i className='material-icons'>close</i>
			</a>
		</li>
	);
}

export default BasketItem;
