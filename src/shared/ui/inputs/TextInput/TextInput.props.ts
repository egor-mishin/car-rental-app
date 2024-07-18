import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface TextInputProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	placeholder: string;
	iconSymbol?: string;
	label?: string;
}
