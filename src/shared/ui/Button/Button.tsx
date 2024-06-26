import cn from 'classnames';
import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
	children,
	appearance,
	className,
	size,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.minimal]: appearance === 'minimal',
				[styles.large]: size === 'large',
				[styles.medium]: size === 'medium',
				[styles.small]: size === 'small',
			})}
		>
			{children}
		</button>
	);
};
