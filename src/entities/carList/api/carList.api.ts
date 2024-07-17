import { apiInstance } from '@/shared/api/base';
import { ICarList } from '../model/carList.interface';

const BASE_URL = 'cars';

export const getCars = async (): Promise<ICarList> => {
	return await apiInstance.get(`${BASE_URL}`);
};
