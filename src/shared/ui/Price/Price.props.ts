import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PriceProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	price: string;
	period: 'DAY' | 'MONTH';
	discount?: string;
	currency: 'USD' | 'EUR' | 'GBP' | 'YEAN';
}
