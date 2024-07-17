'use client';
import { combineProviders } from '@/app/providers';
import { getCars } from '@/entities/carList/api/carList.api';
import { ICarList } from '@/entities/carList/model';
import { ReactNode, useEffect, useState } from 'react';
import CarsProvider from '../providers/cars-provider';

export const AppLoader = ({ children }: { children: ReactNode }) => {
	const [localData, setLocalData] = useState<ICarList | null>(null);
	useEffect(() => {
		loadAppData();
	}, []);

	const loadAppData = async () => {
		const [ApiData] = await Promise.all([getCars()]);
		setLocalData(ApiData);
	};

	const isData = localData?.cars;

	if (!isData) {
		return;
	}

	const AllProviders = combineProviders([[CarsProvider, localData || []]]);

	return <AllProviders>{children}</AllProviders>;
};
