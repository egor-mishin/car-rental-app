'use client';
import useModal from '@/shared/hooks/useModal';
import { ICONS } from '@/shared/lib/constants';
import { ROUTES } from '@/shared/lib/routes';
import { Avatar, Button, CustomLink, Modal, NotificationIcon } from '@/shared/ui';
import styles from './authPanel.module.scss';
import { AuthPanelProps } from './authPanel.props';
import { LoginForm } from '@/widgets';
export const AuthPanel = ({ isAuthenticated }: AuthPanelProps) => {
	if (!isAuthenticated) {
		const { isOpen, toggleModal } = useModal();
		return (
			<>
				<Modal isOpen={isOpen} toggleModal={toggleModal}>
					<LoginForm />
				</Modal>
				<div className={styles.authPanel}>
					<Button
						title="Sign in"
						appearance="primary"
						kind="regular"
						size="small"
						onClick={() => toggleModal()}
					/>
					<span className={styles.text}>or</span>
					<Button
						title="Register"
						route={ROUTES.REGISTER}
						appearance="secondary"
						kind="regular"
						size="small"
					/>
				</div>
			</>
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
