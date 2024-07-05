import { P } from '../Ptag/Ptag';
import styles from './Price.module.scss';
import { PriceProps } from './Price.props';

export const Price = ({ price, currency, period, discount, ...props }: PriceProps) => {
	return (
		<div {...props}>
			<P className={styles.price} size="s">
				{`${currency} ${price} / `}
				<span className={styles.period}>{period}</span>
				<br />
				<span className={styles.discount}>{discount && `${currency} ${discount}`}</span>
			</P>
		</div>
	);
};
