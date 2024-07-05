import Link from 'next/link';
import { CustomLinkProps } from './CustomLink.props';
import { getIcon } from '@/shared/lib/getIcon';
import styles from './CustomLink.module.scss';
import cn from 'classnames';

export const CustomLink = ({
	children,
	url,
	title,
	iconSymbol,
	appearance,
	...props
}: CustomLinkProps) => {
	const svgIcon = iconSymbol ? getIcon(iconSymbol) : null;
	return (
		<Link
			href={url}
			title={title}
			className={cn(styles.link, {
				[styles.iconOnly]: appearance === 'icon-only',
			})}
			{...props}
		>
			{svgIcon}
			{children}
		</Link>
	);
};
