import { SearchInput } from '@/shared/ui/inputs/search/Search';
import { Logo } from '@/shared/ui/Logo/Logo';
import styles from './header.module.scss';
import { AuthPanel } from './authPanel/authPanel';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<SearchInput placeholder="Something to search type here" />
			<AuthPanel isAuthenticated={false} />
		</header>
	);
};
