import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	disabled?: boolean;
	appearance: 'primary' | 'secondary' | 'minimal';
	kind: 'regular' | 'icon-right' | 'icon-only' | 'with-icon';
	size: 'large' | 'medium' | 'small';
	className?: string;
	iconLabel?: string;
	title: string;
	name?: string;
	testId?: string;
	onClickFn?: () => void;
}
