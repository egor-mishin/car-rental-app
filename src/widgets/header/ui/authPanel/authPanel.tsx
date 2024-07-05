import { Button } from '@/shared/ui/Button/Button';
import styles from './authPanel.module.scss';
import { CustomLink } from '@/shared/ui/Link/CustomLink';
import { ICONS } from '@/shared/lib/constants';
import { ROUTES } from '@/shared/lib/routes';
import { AuthPanelProps } from './authPanel.props';
import { NotificationIcon } from '@/shared/ui/NotificationsIcon/NotificationIcon';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
export const AuthPanel = ({ isAuthenticated }: AuthPanelProps) => {
	if (isAuthenticated) {
		return (
			<div className={styles.authPanel}>
				<Button
					title="Sign in"
					route={ROUTES.LOGIN}
					appearance="primary"
					kind="regular"
					size="large"
				/>
				<span className={styles.text}>or</span>
				<Button
					title="Register"
					route={ROUTES.REGISTER}
					appearance="secondary"
					kind="regular"
					size="large"
				/>
			</div>
		);
	}
	return (
		<div className={styles.authPanel}>
			<CustomLink
				url="user/favorites"
				appearance="icon-only"
				iconSymbol={ICONS.LIKE_BLACK}
				title="favorites"
			/>
			<NotificationIcon notificationsAmount={5} />
			<CustomLink
				url="user/settings"
				appearance="icon-only"
				iconSymbol={ICONS.SETTINGS}
				title="favorites"
			/>
			<Avatar />
		</div>
	);
};
