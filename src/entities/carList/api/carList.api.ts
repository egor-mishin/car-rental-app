import { apiInstance } from '@/shared/api/base';
import { ICar } from '../interface/carList.interface';

const BASE_URL = 'cars';

export const getBook = (isbn13: string): Promise<ICar[]> => {
	return apiInstance.get(`${BASE_URL}`);
};
