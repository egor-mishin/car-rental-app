import { ICONS } from '@/shared/lib/constants';
import { CustomLink } from '../Link/CustomLink';
import styles from './NotificationIcon.module.scss';
import { NotificationIconProps } from './NotificationIcon.props';

export const NotificationIcon = ({ notificationsAmount }: NotificationIconProps) => {
	return (
		<div className={styles.notificationIcon}>
			<span className={styles.amount}>{notificationsAmount}</span>
			<CustomLink
				url="/favorites"
				appearance="icon-only"
				iconSymbol={ICONS.NOTIFICATION}
				title="favorites"
			/>
		</div>
	);
};
