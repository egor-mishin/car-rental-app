import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BannerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	id: string;
	title: string | undefined;
	text: string;
	imageUrl: string;
	bgImageUrl: string;
}
