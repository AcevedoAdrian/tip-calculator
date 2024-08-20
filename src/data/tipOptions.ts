type TipOption = {
	id: string;
	value: number;
	label: string;
};
export const tipOptions: TipOption[] = [
	{
		id: 'tip-10',
		value: 0.1,
		label: '10%',
	},
	{
		id: 'tip-20',
		value: 0.2,
		label: '20%',
	},
	{
		id: 'tip-50',
		value: 0.5,
		label: '50%',
	},
];
