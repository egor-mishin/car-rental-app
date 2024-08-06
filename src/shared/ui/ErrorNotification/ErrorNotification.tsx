'use client';
import { FC } from 'react';
import styles from './ErrorNotification.module.scss';
import { IErrorNotificationProps } from './ErrorNotification.props';
import { motion } from 'framer-motion';
import { P } from '../Ptag/Ptag';

export const ErrorNotification: FC<IErrorNotificationProps> = ({ error }) => {
	return (
		<motion.div className={styles.error} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<P size="m" className={styles.errorText}>
				{error}
			</P>
		</motion.div>
	);
};
