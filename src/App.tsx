import { menuItems } from './data/db';
import MenuItems from './components/MenuItems';
import useOrder from './hooks/useOrder';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';
function App() {
	const { order, tip, setTip, addItem, deleteItem, placeOrder } = useOrder();
	return (
		<>
			<header className='bg-teal-600 py-5'>
				<h1 className='text-center text-4xl font-black text-white'>
					Calculadora de Propinas y Consumos
				</h1>
			</header>
			<main className='max-w-5xl mx-auto py-20 grid md:grid-cols-2'>
				<div className='p-5'>
					<h2 className='text-4xl font-black'>Menu</h2>
					<div className='space-y-2 mt-10'>
						{menuItems.map(item => (
							<MenuItems
								key={item.id}
								item={item}
								addItem={addItem}
							/>
						))}
					</div>
				</div>
				<div className='p-5'>
					<h2 className='font-black text-4xl'>Consumos</h2>
					<div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10 mt-10'>
						{order.length === 0 ? (
							<p className='text-center'>La orden esta vacia</p>
						) : (
							<>
								<OrderContents
									order={order}
									deleteItem={deleteItem}
								/>
								<TipPercentageForm
									setTip={setTip}
									tip={tip}
								/>
								<OrderTotals
									tip={tip}
									order={order}
									placeOrder={placeOrder}
								/>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
