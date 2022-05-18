import { useEffect } from 'react';
function Alert({ name, onCloseAlert }) {
	useEffect(() => {
		const timerId = setTimeout(() => {
			onCloseAlert();
		}, 3000);
		return () => {
			clearTimeout(timerId);
		};
		// eslint-disable-next-line
	}, [name]);

	return (
		<div id='alert'>
			<div className='toast'>
				<span>{name} добавлен в корзину</span>
			</div>
		</div>
	);
}

export default Alert;
