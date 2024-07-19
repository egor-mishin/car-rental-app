import { Button, TextInput } from '@/shared/ui';
import styles from './loginForm.module.scss';

export const LoginForm = () => {
	return (
		<div className={styles.form}>
			<form>
				<TextInput placeholder="Your email" label="Email" />
				<TextInput placeholder="Your password" label="Password" />
				<Button title="Sign in" appearance="primary" kind="regular" size="small" />
			</form>
		</div>
	);
};
