import { getIcon } from '@/shared/lib/getIcon';
import { SearchInputProps } from './Search.props';
import { ICONS } from '@/shared/lib/constants';
import styles from './Search.module.scss';

export const SearchInput = ({ placeholder, ...props }: SearchInputProps) => {
	const icon = getIcon(ICONS.SEARCH) ? getIcon(ICONS.SEARCH) : null;
	return (
		<div className={styles.wrapper}>
			<span className={styles.searchIcon}>{icon}</span>
			<input type="text" placeholder={placeholder} {...props} className={styles.searchInput} />
		</div>
	);
};
