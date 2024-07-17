import { create } from 'zustand';
import { IBanner } from './banner.interface';

interface IState {
	banners: IBanner[] | null;
	setBanners: (banners: IBanner[]) => void;
}

export const createBannersStore = (banners: IBanner[]) =>
	create<IState>((set, get) => ({
		banners,
		setBanners: (banners) => {
			set({ banners });
		},
	}));
