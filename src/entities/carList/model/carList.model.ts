import { apiInstance } from '@/shared/api/base';

const BASE_URL = 'cars';

export const getBook = (isbn13: string): Promise<IBookDescription> => {
	return apiInstance.get(`${BASE_URL}/${isbn13}`);
};
