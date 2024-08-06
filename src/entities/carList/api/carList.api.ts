import { apiInstance } from '@/shared/api/base';
import { ICar, ICarList } from '../model/carList.interface';

const BASE_URL = 'cars';

export const getCars = async (): Promise<ICar[]> => {
	return await apiInstance.get(`${BASE_URL}`);
};
