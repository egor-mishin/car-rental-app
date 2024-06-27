import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
	children,
	appearance,
	className,
	size,
	title,
	icon,
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
			{title}
		</button>
	);
};
