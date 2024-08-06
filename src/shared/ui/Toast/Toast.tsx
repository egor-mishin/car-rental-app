'use client';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import { IToastProps } from './Toast.props';
import { P } from '../Ptag/Ptag';

export const Toast: FC<IToastProps> = ({ message, kind, time = 5000 }) => {
	const [isShown, setShown] = useState(false);
	useEffect(() => {
		if (!message) {
			return;
		}

		setShown(true);

		const timer = setTimeout(() => {
			setShown(false);

			return () => {
				clearTimeout(timer);
			};
		}, time);
	}, [message]);

	if (!isShown) {
		return <></>;
	}

	return (
		<motion.div
			className={styles.toast}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
				ease: 'easeInOut',
			}}
		>
			<P size={'s'}>{message}</P>
		</motion.div>
	);
};
