'use client';
import { CURRENCY } from '@/shared/lib/constants';
import { CldImage } from 'next-cloudinary';
import { Button } from '../Button/Button';
import { FavButton } from '../FavButton/FavButton';
import { Htag } from '../Htag/Htag';
import { Item } from '../Item/Item';
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
	discount,
}: CardProps) => {
	const specsArray = specs && Object.entries(specs);

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<Htag tag="h2">
					{title}
					<span className={styles.subtitle}>{subtitle}</span>
				</Htag>
				<FavButton />
			</div>
			<div className={styles.imageContainer}>
				<CldImage src={imageUrl} alt={title} fill />
			</div>
			<div className={styles.spec}>
				{specsArray?.map((spec) => (
					<Item title={spec[1].toString()} iconSymbol={spec[0]} />
				))}
			</div>
			<div className={styles.footer}>
				<Price price={price} period={period} currency={CURRENCY.USD} discount={discount} />
				<Button
					route={slug}
					appearance={'primary'}
					kind="regular"
					size="large"
					title="More details"
				/>
			</div>
		</div>
	);
};
