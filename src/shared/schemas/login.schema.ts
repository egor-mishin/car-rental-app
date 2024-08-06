import { z } from 'zod';
import { ERRORS } from '../lib/constants';
import { passwordValidation } from '@/shared/lib';

export const LoginFormSchema = z.object({
	email: z.string({ required_error: ERRORS.FIELD_REQUIRED }).email({
		message: ERRORS.EMAIL_NOT_VALID,
	}),
	password: z
		.string()
		.min(1, { message: 'Must have at least 1 character' })
		.regex(passwordValidation, {
			message:
				'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
		}),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
