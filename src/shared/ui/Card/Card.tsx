import Image from 'next/image';
import { Item } from '../Item/Item';
import { Button } from '../Button/Button';
import { Htag } from '../Htag/Htag';
import { Price } from '../Price/Price';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = ({
	title,
	subtitle,
	imageUrl,
	specs,
	price,
	slug,
	period,
	currency,
}: CardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<Htag tag="h2">
					{title}
					<span className={styles.subtitle}>{subtitle}</span>
				</Htag>
			</div>
			<Image src={imageUrl} alt={title} />
			{specs.map((spec) => (
				<Item title={spec.title} iconSymbol={spec.iconSymbol} />
			))}
			<div className={styles.footer}>
				<Price price={price} period={period} currency={currency} />
				<Button appearance={'primary'} kind="regular" size="large" title="More details" />
			</div>
		</div>
	);
};
