import { ISpec } from '@/entities/carList/model/carList.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	subtitle: string;
	imageUrl: string;
	specs: ISpec;
	price: number;
	discount?: number;
	slug: string;
	period: string;
	currency?: string;
}
