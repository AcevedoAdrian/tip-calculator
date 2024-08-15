import type { MenuItem } from '../types';
type MenuItemsProps = {
	item: MenuItem;
};
export default function MenuItems({ item }: MenuItemsProps) {
	return (
		<button className='border-2 border-teal-400 w-full p-3'>
			<p>{item.name}</p>
			<p className='font-black'>${item.price}</p>
		</button>
	);
}
