import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface CustomLinkProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	url: string;
	iconSymbol?: string;
	size?: 'small' | 'medium' | 'large';
	appearance: 'regular' | 'icon-only';
	children?: ReactNode;
	title: string;
}
