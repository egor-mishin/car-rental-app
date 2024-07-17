import { apiInstance } from '@/shared/api/base';
import { IBanner } from '../model/banner.interface';

const BASE_URL = 'banners';

export const getBanners = async (): Promise<IBanner[]> => {
	return await apiInstance.get(`${BASE_URL}`);
};
