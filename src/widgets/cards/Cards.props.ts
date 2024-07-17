import { ICar } from '@/entities/carList/model';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	cars: ICar[] | null;
}
