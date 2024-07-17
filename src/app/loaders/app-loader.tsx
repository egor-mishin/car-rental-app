'use client';
import { combineProviders } from '@/app/providers';
import { getBanners } from '@/entities/banner/api/banners.api';
import { getCars } from '@/entities/carList/api/carList.api';
import { ReactNode, useEffect, useState } from 'react';
import BannersProvider from '../providers/banners-provider';
import CarsProvider from '../providers/cars-provider';
import { IBanner } from '@/entities/banner/model/banner.interface';
import { ICar } from '@/entities/carList/model';

export const AppLoader = ({ children }: { children: ReactNode }) => {
	const [localData, setLocalData] = useState<{ banners: IBanner[]; cars: ICar[] } | null>(null);
	const isData = localData?.banners;
	useEffect(() => {
		loadAppData();
	}, []);

	const loadAppData = async () => {
		const [cars, banners] = await Promise.all([getCars(), getBanners()]);
		setLocalData({ cars, banners });
	};

	if (!isData) {
		return;
	}

	const AllProviders = combineProviders([
		[CarsProvider, localData?.cars || []],
		[BannersProvider, localData?.banners || []],
	]);

	return <AllProviders>{children}</AllProviders>;
};
