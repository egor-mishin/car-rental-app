import { SearchInput } from '@/shared/ui/inputs/search/Search';
import { Logo } from '@/shared/ui/Logo/Logo';
import { AuthPanel } from './authPanel/authPanel';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrapper}>
					<Logo />
					<SearchInput placeholder="Something to search type here" />
					<AuthPanel isAuthenticated={false} />
				</div>
			</div>
		</header>
	);
};
