import { useState } from 'react';
import type { OrderItem, MenuItem } from '../types';

export default function useOrder() {
	const [order, setOrder] = useState<OrderItem[]>([]);
	const [tip, setTip] = useState(0);

	// Add item to the order
	const addItem = (item: MenuItem) => {
		// Check if the item is already in the order
		const itemExist = order.findIndex(orderItem => orderItem.id === item.id);
		// If the item is in the order, update the quantity
		if (itemExist !== -1) {
			const updateOrder = order.map(orderItem =>
				orderItem.id === item.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem
			);
			setOrder(updateOrder);
		} else {
			const newItem: OrderItem = { ...item, quantity: 1 };
			setOrder([...order, newItem]);
		}
	};

	// Delete item from the order
	const deleteItem = (id: MenuItem['id']) => {
		const updateOrder = order
			.map(orderItem =>
				orderItem.id === id
					? { ...orderItem, quantity: orderItem.quantity - 1 }
					: orderItem
			)
			.filter(orderItem => orderItem.quantity > 0);
		setOrder(updateOrder);
	};

	const placeOrder = () => {
		setOrder([]);
		setTip(0);
	};
	return {
		order,
		tip,
		setTip,
		addItem,
		deleteItem,
		placeOrder,
	};
}
