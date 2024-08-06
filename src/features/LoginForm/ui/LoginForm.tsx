import { LoginFormSchema, LoginFormSchemaType } from '@/shared/schemas/login.schema';
import { ButtonSubmit, TextInput, Toast } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './loginForm.module.scss';

export const LoginForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting, errors, isSubmitSuccessful },
	} = useForm<LoginFormSchemaType>({
		resolver: zodResolver(LoginFormSchema),
	});

	const onSubmit: SubmitHandler<LoginFormSchemaType> = async (formData) => {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				body: JSON.stringify(formData),
			});
			const data = await response.json();
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
		reset();
	};
	return (
		<>
			<Toast
				message={
					isSubmitSuccessful
						? 'Thank you for contacting me! Answer is coming soon...'
						: Object.keys(errors).length > 0
						? 'Something went wrong...'
						: undefined
				}
				kind={isSubmitSuccessful ? 'success' : undefined}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<TextInput
					label="Email:"
					name="email"
					type="text"
					placeholder="Enter your email"
					required
					control={control}
				/>
				<TextInput
					label="Password:"
					name="password"
					type="password"
					required
					placeholder="Enter your password"
					control={control}
				/>
				<ButtonSubmit
					isSubmitting={isSubmitting}
					title="Log in"
					appearance={'primary'}
					kind={'regular'}
					size={'small'}
				/>
			</form>
		</>
	);
};
