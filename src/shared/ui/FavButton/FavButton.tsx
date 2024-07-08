'use client';
import { useState } from 'react';
import FavIcon from '@/shared/assets/icons/like.svg';
import styles from './FavButton.module.scss';

export const FavButton = ({ isFavorite }: { isFavorite?: boolean }) => {
	const [localIsFavorite, setLocalIsFavorite] = useState<boolean | undefined>(isFavorite);
	return (
		<>
			<FavIcon
				onClick={() => {
					setLocalIsFavorite(!localIsFavorite);
				}}
				className={localIsFavorite && styles.filled}
			/>
		</>
	);
};
