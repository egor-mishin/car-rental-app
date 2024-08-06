'use client';
import { getIcon } from '@/shared/lib/helpers/getIcon';
import cn from 'classnames';
import styles from './ButtonSubmit.module.scss';
import { ButtonProps } from './ButtonSubmit.props';

export const ButtonSubmit = ({
	appearance,
	className,
	size = 'medium',
	title = 'button',
	isSubmitting,
	kind = 'regular',
	iconSymbol,
	testId,
	...props
}: ButtonProps): JSX.Element => {
	const svgIcon = iconSymbol ? getIcon(iconSymbol) : null;

	return (
		<button
			disabled={isSubmitting}
			data-testid={testId}
			type="submit"
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.minimal]: appearance === 'minimal',
				[styles.large]: size === 'large',
				[styles.medium]: size === 'medium',
				[styles.small]: size === 'small',
				[styles.withIcon]: iconSymbol,
				[styles.iconRight]: kind === 'icon-right',
			})}
			{...props}
		>
			<>
				{iconSymbol && kind !== 'icon-only' ? (
					<>
						{svgIcon} {title}
					</>
				) : kind === 'icon-only' ? (
					svgIcon
				) : (
					title
				)}
			</>
		</button>
	);
};
