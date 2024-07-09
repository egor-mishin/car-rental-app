import { Avatar, Button, CustomLink, NotificationIcon } from '@/shared/ui';
import styles from './authPanel.module.scss';
import { AuthPanelProps } from './authPanel.props';
import { ROUTES } from '@/shared/lib/routes';
import { ICONS } from '@/shared/lib/constants';
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
