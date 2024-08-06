import { getIcon } from '@/shared/lib/helpers/getIcon';
import styles from './Item.module.scss';

export const Item = ({ iconSymbol, title }: { iconSymbol?: string; title: string }) => {
	const icon = getIcon(iconSymbol);

	return (
		<div className={styles.item}>
			{icon && icon}
			{title}
		</div>
	);
};
