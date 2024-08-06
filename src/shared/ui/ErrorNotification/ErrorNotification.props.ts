import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IErrorNotificationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	error?: string | undefined;
}
