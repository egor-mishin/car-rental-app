import { ParagraphProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';

export const P = ({ children, size, kind, ...props }: ParagraphProps) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.white]: kind === 'white',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
