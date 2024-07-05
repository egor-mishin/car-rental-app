import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	subtitle: string;
	imageUrl: string;
	specs: string[];
	price: string;
	slug: string;
	period: string;
	currency: string;
}
