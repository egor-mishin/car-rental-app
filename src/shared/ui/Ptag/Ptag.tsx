import { ParagraphProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';

export const P = ({ children, size, kind, ...props }: ParagraphProps) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.white]: kind === 'white',
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
