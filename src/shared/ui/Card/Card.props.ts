import { ISpec } from '@/shared/interfaces/car.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	subtitle: string;
	imageUrl: string;
	specs: ISpec[];
	price: number;
	discount?: number;
	slug: string;
	period: string;
	currency?: string;
}
