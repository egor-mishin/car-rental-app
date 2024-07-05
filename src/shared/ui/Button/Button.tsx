'use client';
import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import { getIcon } from '@/shared/lib/getIcon';
import Link from 'next/link';

export const Button = ({
	appearance,
	className,
	size = 'medium',
	title = 'button',
	disabled,
	route,
	kind = 'regular',
	onClickFn,
	iconSymbol,
	testId,
	...props
}: ButtonProps): JSX.Element => {
	const svgIcon = iconSymbol ? getIcon(iconSymbol) : null;

	return route ? (
		<Link
			href={route}
			data-testid={testId}
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
		</Link>
	) : (
		<button
			onClick={onClickFn}
			disabled={disabled}
			data-testid={testId}
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
