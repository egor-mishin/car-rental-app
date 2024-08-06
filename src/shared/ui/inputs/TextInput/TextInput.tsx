import { getIcon } from '@/shared/lib//helpers/getIcon';
import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.props';
import { useController } from 'react-hook-form';
import { ERRORS } from '@/shared/lib/constants';
import { P, ErrorNotification } from '@/shared/ui';

export const TextInput = ({
	placeholder,
	iconSymbol,
	label,
	required,
	type = 'text',
	...props
}: TextInputProps) => {
	const icon = iconSymbol ? getIcon(iconSymbol) : null;
	const { field, fieldState } = useController(props);
	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>{label}</label>
			<span className={styles.searchIcon}>{icon}</span>
			<input type={type} placeholder={placeholder} className={styles.textInput} {...field} />

			<P size="m">
				{fieldState.isTouched && !fieldState.isDirty && required ? (
					<ErrorNotification error={ERRORS.FIELD_REQUIRED} />
				) : null}
			</P>
			<p>{fieldState.invalid ? <ErrorNotification error={fieldState.error?.message} /> : null}</p>
		</div>
	);
};
