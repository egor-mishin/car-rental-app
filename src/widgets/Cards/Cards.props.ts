import { ICar } from '@/shared/lib/car.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	cars: ICar[];
}
