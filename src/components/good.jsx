const Good = ({ price, title, image, description, id, onAddToCart }) => {
	return (
		<div className='card'>
			<div className='card-image waves-effect waves-block waves-light'>
				<img className='activator' src={image} alt={title} />
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>
					{title}
				</span>
				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn'
					onClick={() => onAddToCart({ id, title, price })}>
					Buy
				</button>
				<p>
					<span>{price}грн</span>
				</p>
			</div>
		</div>
	);
};

export default Good;
