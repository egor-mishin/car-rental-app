import { LoginFormSchemaType } from '@/shared/schemas/login.schema';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UseControllerProps } from 'react-hook-form';

export interface TextInputProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		UseControllerProps<LoginFormSchemaType> {
	placeholder?: string;
	defaultValue?: string;
	required?: boolean;
	label?: string;
	iconSymbol?: string;
	type?: 'text' | 'password';
}
