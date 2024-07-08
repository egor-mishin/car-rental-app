'use client';
import { CldImage } from 'next-cloudinary';
import { Button } from '../Button/Button';
import { Htag } from '../Htag/Htag';
import { P } from '../Ptag/Ptag';
import styles from './Banner.module.scss';
import { BannerProps } from './Banner.props';
export const Banner = ({ title, text, imageUrl, bgImageUrl }: BannerProps) => {
	return (
		<div className={styles.banner}>
			<div className={styles.bgImg}>
				<CldImage src={bgImageUrl} alt={title} className={styles.bgImg} fill />
			</div>
			<div className={styles.content}>
				<Htag tag="h2" kind="white">
					{title}
				</Htag>
				<P size="s" kind="white">
					{text}
				</P>
				<Button appearance="primary" kind="regular" size="large" title="Rental Car" />
			</div>
			<div className={styles.imageContainer}>
				<CldImage src={imageUrl} alt={title} fill />
			</div>
		</div>
	);
};
