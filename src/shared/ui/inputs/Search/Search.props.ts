import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface SearchInputProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	placeholder: string;
}
