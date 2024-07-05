import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface NotificationIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	notificationsAmount: number;
}
