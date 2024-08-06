export interface IToastProps {
	kind?: 'error' | 'warning' | 'success';
	message?: string;
	time?: number;
}
