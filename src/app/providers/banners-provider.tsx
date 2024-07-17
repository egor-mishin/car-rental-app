'use client';
import { IBanner } from '@/entities/banner/model/banner.interface';
import { createBannersStore } from '@/entities/banner/model/banner.model';
import { createContext, ReactNode, useContext, useState } from 'react';

const BannersContext = createContext<ReturnType<typeof createBannersStore> | null>(null);

export const useBannersStore = () => {
	if (!BannersContext) throw new Error('useCart must be used within a CartProvider');
	return useContext(BannersContext)!;
};

const BannersProvider = ({ banners, children }: { banners: IBanner[]; children: ReactNode }) => {
	const [store] = useState(() => createBannersStore(banners));
	return <BannersContext.Provider value={store}>{children}</BannersContext.Provider>;
};

export default BannersProvider;
