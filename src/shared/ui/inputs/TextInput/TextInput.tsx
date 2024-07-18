import { getIcon } from '@/shared/lib/getIcon';
import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.props';

export const TextInput = ({ placeholder, iconSymbol, label, ...props }: TextInputProps) => {
	const icon = iconSymbol ? getIcon(iconSymbol) : null;
	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>{label}</label>
			<span className={styles.searchIcon}>{icon}</span>
			<input type="text" placeholder={placeholder} className={styles.textInput} {...props} />
		</div>
	);
};
