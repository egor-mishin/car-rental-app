'use client';
import { useEffect, useState } from 'react';
import Star from '../../assets/icons/star.svg';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import cn from 'classnames';

export const Rating = ({ rating, isEditable, ...props }: RatingProps) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<></>));

	useEffect(() => {
		renderRating(rating);
	}, [rating]);

	const renderRating = (currentRating: number) => {
		const currentRatingArray = ratingArray.map((_, i) => (
			<Star
				onClick={() => {
					changeRating(i);
				}}
				onMouseOver={() => {
					changeRating(i);
				}}
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
				})}
			/>
		));
		setRatingArray(currentRatingArray);
	};

	const changeRating = (i: number) => {
		if (!isEditable) {
			return;
		}

		renderRating(i + 1);
	};

	return (
		<div className={styles.rating} {...props}>
			{ratingArray.map((r) => (
				<div key={`${r}-star`}>{r}</div>
			))}
		</div>
	);
};
