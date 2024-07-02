import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Htag
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
