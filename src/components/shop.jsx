import { API_KEY, API_URL } from '../config';
import { useState, useEffect } from 'react';
import Preloader from '../components/preloader';
import Good from '../components/good';
import Cart from './cart';
import BasketList from './basketList';
import Alert from './alert';
function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setIsBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	const onAddToCart = (item) => {
		const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
		setAlertName(item.title);
		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((item, id) => {
				if (id === itemIndex) {
					return {
						...item,
						quantity: item.quantity + 1,
					};
				} else {
					return item;
				}
			});
			setOrder(newOrder);
		}
	};

	const onIncrease = (itemId) => {
		const newItems = order.map((item) => {
			if (item.id === itemId) {
				item.quantity = item.quantity + 1;
				return item;
			} else {
				return item;
			}
		});

		setOrder(newItems);
	};
	const onDecrease = (itemId) => {
		const newItems = order.map((item) => {
			if (item.id === itemId) {
				item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
				return item;
			} else {
				return item;
			}
		});

		setOrder(newItems);
	};

	const onCloseAlert = () => {
		setAlertName('');
	};

	const onBasketShow = () => {
		setIsBasketShow(!isBasketShow);
	};

	const onRemoveItem = (idItem) => {
		const newOrder = order.filter((el) => el.id !== idItem);
		setOrder(newOrder);
	};

	useEffect(function request() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				data.featured && setGoods(data.featured);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<main className='content container'>
			{alertName ? (
				<Alert name={alertName} onCloseAlert={onCloseAlert} />
			) : null}
			<Cart onBasketShow={onBasketShow} quantity={order.length} />
			{isBasketShow ? (
				<BasketList
					order={order}
					onRemoveItem={onRemoveItem}
					onIncrease={onIncrease}
					onDecrease={onDecrease}
				/>
			) : null}
			<div className='goods'>
				{loading ? (
					<Preloader />
				) : !goods.length ? (
					<h4> nothing goods </h4>
				) : (
					goods.map((item) => {
						return (
							<Good
								onAddToCart={onAddToCart}
								key={item.id}
								id={item.id}
								title={item.name}
								price={item.price}
								image={item.full_background}
								description={item.description}
							/>
						);
					})
				)}
			</div>
		</main>
	);
}

export default Shop;
