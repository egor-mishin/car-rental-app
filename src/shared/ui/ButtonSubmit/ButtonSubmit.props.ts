import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>,
		HTMLAnchorElement & HTMLButtonElement
	> {
	disabled?: boolean;
	appearance: 'primary' | 'primary-light' | 'secondary' | 'minimal';
	kind: 'regular' | 'icon-right' | 'icon-only' | 'with-icon';
	size: 'large' | 'medium' | 'small';
	className?: string;
	iconSymbol?: string;
	title: string;
	name?: string;
	testId?: string;
	route?: string;
	isSubmitting?: boolean;
}
