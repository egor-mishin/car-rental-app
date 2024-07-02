'use client';
import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import WeChat from '@/shared/assets/icons/wechat.svg';

export const Button = ({
	appearance,
	className,
	size = 'medium',
	title = 'button',
	disabled,
	kind = 'regular',
	onClickFn,
	iconLabel,
	testId,
	...props
}: ButtonProps): JSX.Element => {
	const SVGIcon = iconLabel === 'wechat' && <WeChat />;

	return (
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
				[styles.withIcon]: iconLabel,
				[styles.iconRight]: kind === 'icon-right',
			})}
			{...props}
		>
			<>
				{iconLabel && kind !== 'icon-only' ? (
					<>
						{SVGIcon} {title}
					</>
				) : kind === 'icon-only' ? (
					SVGIcon
				) : (
					title
				)}
			</>
		</button>
	);
};
