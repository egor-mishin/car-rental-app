import { cars } from './../../../../_data/db';
import { create } from 'zustand';
import { ICar } from '../interface/carList.interface';

interface IState {
	cars: ICar[] | null;
	setCars: (cars: ICar[]) => void;
}

export const createCarsStore = (cars: ICar[]) =>
	create<IState>((set, get) => ({
		cars,
		setCars: (cars) => {
			set({ cars });
		},
	}));
