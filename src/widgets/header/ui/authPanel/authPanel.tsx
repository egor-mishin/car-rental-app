import { Button } from '@/shared/ui/Button/Button';
import styles from './authPanel.module.scss';
import { CustomLink } from '@/shared/ui/Link/CustomLink';
import { ICONS } from '@/shared/lib/constants';
import { ROUTES } from '@/shared/lib/routes';
export const AuthPanel = ({ isAuthenticated }) => {
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
				url="/favorites"
				appearance="icon-only"
				iconSymbol={ICONS.LIKE_BLACK}
				title="favorites"
			/>
			<CustomLink
				url="/favorites"
				appearance="icon-only"
				iconSymbol={ICONS.NOTIFICATION}
				title="favorites"
			/>
			<CustomLink
				url="/favorites"
				appearance="icon-only"
				iconSymbol={ICONS.SETTINGS}
				title="favorites"
			/>
		</div>
	);
};
