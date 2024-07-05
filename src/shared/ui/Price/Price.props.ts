import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PriceProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	price: string;
	period: string;
	discount?: string;
	currency: string;
}