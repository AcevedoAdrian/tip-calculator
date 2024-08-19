import { formatCurrency } from '../healpers';
import type { MenuItem, OrderItem } from '../types';

type OrderContentsProps = {
	order: OrderItem[];
	deleteItem: (id: MenuItem['id']) => void;
};
export default function OrderContents({
	order,
	deleteItem,
}: OrderContentsProps) {
	return (
		<div className='space-y-3 '>
			{order.length === 0 ? (
				<p className='text-center'>La orden esta vacia</p>
			) : (
				order.map(item => (
					<div
						key={item.id}
						className='flex justify-between items-center border-b border-slate-300 pb-2'>
						<p>
							<span className='font-black'>{item.name} </span>x {item.quantity}
						</p>
						<div className='flex  items-center'>
							<p className='pr-2'>
								{formatCurrency(item.price * item.quantity)}{' '}
							</p>
							<button
								className='bg-red-600 h-6 w-6 font-bold rounded-full text-white items-center'
								onClick={() => deleteItem(item.id)}>
								x
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}
