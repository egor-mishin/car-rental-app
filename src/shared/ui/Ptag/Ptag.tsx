import { ParagraphProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';

export const P = ({ children, size, ...props }: ParagraphProps) => {
	return <p {...props}>{children}</p>;
};
