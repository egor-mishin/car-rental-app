import { ICar } from '@/shared/lib/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const cars: ICar[] = [
	{
		id: uuidv4(),
		model: 'Koenigsegg',
		type: 'Sport',
		specs: [{ gas: '80L' }, { transmission: 'Manual' }, { capacity: '2 people' }],
		price: 85.0,
		imageUrl: 'car_3_mxwumk',
	},

	{
		id: uuidv4(),
		model: 'Nissan GT - R',
		type: 'Sport',
		specs: [{ gas: '80L' }, { transmission: 'Electric' }, { capacity: '2 people' }],
		price: 90.0,
		imageUrl: 'car_3-1_jpssoc',
	},

	{
		id: uuidv4(),
		model: 'Rolls - Royce',
		type: 'Sedan',
		specs: [{ gas: '70L' }, { transmission: 'Manual' }, { capacity: '4 people' }],
		price: 78.0,
		imageUrl: 'car_quoudc',
	},

	{
		id: uuidv4(),
		model: 'All New Rush',
		type: 'Sport',
		specs: [{ gas: '70L' }, { transmission: 'Electric' }, { capacity: '6 people' }],
		discount: 15,
		price: 83.0,
		imageUrl: 'Car_1_rzjwxm',
	},

	{
		id: uuidv4(),
		model: 'CR  - V',
		type: 'SUV',
		specs: [{ gas: '80L' }, { transmission: 'Electric' }, { capacity: '6 people' }],
		price: 90.0,
		imageUrl: 'Car_1-3_mntbsq',
	},

	{
		id: uuidv4(),
		model: 'Nissan GT - R',
		type: 'SUV',
		specs: [{ gas: '80L' }, { transmission: 'Electric' }, { capacity: '6 people' }],
		discount: 115,
		price: 99.0,
		imageUrl: 'car_3-1_jpssoc',
	},

	{
		id: uuidv4(),
		model: 'All New Terios',
		type: 'SUV',
		specs: [{ gas: '90L' }, { transmission: 'Electric' }, { capacity: '6 people' }],
		discount: 125,
		price: 99.0,
		imageUrl: 'Car_1-2_yvyptg',
	},

	{
		id: uuidv4(),
		model: 'All New Terios',
		type: 'SUV',
		specs: [{ gas: '90L' }, { transmission: 'Electric' }, { capacity: '6 people' }],
		discount: 125,
		price: 99.0,
		imageUrl: 'Car_1-2_yvyptg',
	},
];

export const banners = [
	{
		id: 'sdfa',
		title: 'The Best Platform for Car Rental',
		text: 'Providing cheap car rental services and safe and comfortable facilities.',
		imageUrl: 'banner1-car_vflsjw',
		bgImageUrl: 'ads2_bxwogl',
	},

	{
		id: 'fedrsfg',
		title: 'Easy way to rent a car at a low price',
		text: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
		imageUrl: 'banner1-car_vflsjw',
		bgImageUrl: 'ads1_sqkfu6',
	},
];
