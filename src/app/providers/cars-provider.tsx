'use client';
import { ICar } from '@/entities/carList/model';
import { createCarsStore } from '@/entities/carList/model/carList.model';
import { createContext, ReactNode, useContext, useState } from 'react';

const CarsContext = createContext<ReturnType<typeof createCarsStore> | null>(null);

export const useCarsStore = () => {
	if (!CarsContext) throw new Error('useCart must be used within a CartProvider');
	return useContext(CarsContext)!;
};

const CarsProvider = ({ cars, children }: { cars: ICar[]; children: ReactNode }) => {
	const [store] = useState(() => createCarsStore(cars));
	return <CarsContext.Provider value={store}>{children}</CarsContext.Provider>;
};

export default CarsProvider;
