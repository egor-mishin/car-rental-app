'use client';
import { combineProviders } from '@/app/providers/combine-providers';
import { getCars } from '@/entities/carList/api/carList.api';
import { ICar } from '@/entities/carList/interface/carList.interface';
import { ReactNode, useEffect, useState } from 'react';
import CarsProvider from '../providers/cars-provider';

export const AppLoader = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		loadAppData();
	}, []);

	const [localData, setLocalData] = useState<{ cars: ICar[] } | null>(null);

	const loadAppData = async () => {
		const [ApiData] = await Promise.all([getCars()]);
		setLocalData(ApiData);
	};

	const isData = localData?.cars;

	if (!isData) {
		return;
	}

	const AllProviders = combineProviders([[CarsProvider, localData?.cars || []]]);

	return <AllProviders>{children}</AllProviders>;
};
