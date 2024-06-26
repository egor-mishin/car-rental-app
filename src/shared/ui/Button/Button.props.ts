import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'secondary' | 'minimal';
	kind: 'label' | 'icon-left' | 'icon-right' | 'icon-only';
	size: 'large' | 'medium' | 'small';
	className: string;
	children: ReactNode;
}
