import { ICONS } from '@/shared/lib/constants';
import { getIcon } from '@/shared/lib/helpers/getIcon';
import Image from 'next/image';
import styles from './Avatar.module.scss';

export const Avatar = ({ imageUrl }: { imageUrl?: string }) => {
	const svgIcon = getIcon(ICONS.AVATAR);
	return (
		<>
			{imageUrl ? (
				<div className={styles.image}>
					<Image src={imageUrl} width={25} height={25} alt="avatar" />
				</div>
			) : (
				<div className={styles.icon}>{svgIcon}</div>
			)}
		</>
	);
};
