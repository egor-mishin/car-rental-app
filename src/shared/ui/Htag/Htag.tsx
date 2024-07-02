'use client';
import HeadingSymbol from '@/public/icons/heading-symbol.svg';
import cn from 'classnames';
import { FC } from 'react';
import styles from './Htag.module.scss';
import { HtagProps } from './Htag.props';

export const Htag = ({ children, tag = 'h3', ...props }): JSX.Element => {
	const getHeading = () => {
		switch (tag) {
			case 'h1':
				return (
					<h1
						className={cn(styles.heading, {
							[styles.h1]: tag === 'h1',
						})}
						{...props}
					>
						{children}
					</h1>
				);
			case 'h2':
				return (
					<h2
						className={cn(styles.heading, {
							[styles.h2]: tag === 'h2',
						})}
						{...props}
					>
						{children}
					</h2>
				);

			default:
				return (
					<h3
						className={cn(styles.heading, {
							[styles.h3]: tag === 'h3',
						})}
						{...props}
					>
						{children}
					</h3>
				);
		}
	};
	return <>{getHeading()}</>;
};
