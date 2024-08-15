import { menuItems } from './data/db';
import type { MenuItem } from './types';
import MenuItems from './components/MenuItems';
function App() {
	return (
		<>
			<header className='bg-teal-600 py-5'>
				<h1 className='text-center text-4xl font-black text-white'>
					Calculadora de Propinas y Consumos
				</h1>
			</header>
			<main className='max-w-5xl mx-auto py-20 grid md:grid-cols-2'>
				<div>
					<h2>Menu</h2>
					{menuItems.map(item => (
						<MenuItems
							key={item.id}
							item={item}
						/>
					))}
				</div>
				<div>
					<h2>Caonsumo</h2>
				</div>
			</main>
		</>
	);
}

export default App;
