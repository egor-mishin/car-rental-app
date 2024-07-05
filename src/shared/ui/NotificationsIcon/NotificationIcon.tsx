import SVGIcon from '../../assets/icons/notification-icon.svg';

export const NotificationIcon = ({ notificationsAmount }) => {
	return (
		<div className={stlyles.notificationIcon}>
			<span className={styles.amount}>{notificationsAmount}</span>
			<SVGIcon />
		</div>
	);
};
