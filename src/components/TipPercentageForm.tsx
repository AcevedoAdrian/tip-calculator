import { tipOptions } from '../data/tipOptions';
import { Dispatch, SetStateAction } from 'react';
type TipPercentageFormProps = {
	setTip: Dispatch<SetStateAction<number>>;
	tip: number;
};

export default function TipPercentageForm({
	tip,
	setTip,
}: TipPercentageFormProps) {
	return (
		<div>
			<h3 className='font-black text-2xl'> Propina: </h3>
			<form>
				{tipOptions.map(option => (
					<div
						key={option.id}
						className='flex gap-2'>
						<label
							htmlFor={option.id}
							className=''>
							{option.label}
						</label>
						<input
							id={option.id}
							type='radio'
							name='tip'
							value={option.value}
							// Parcear el valor a number
							onChange={e => setTip(Number(e.target.value))}
							checked={tip === option.value}
						/>
					</div>
				))}
			</form>
		</div>
	);
}
