import { AuthPanel } from '../';
import { Logo, SearchInput } from '@/shared/ui';
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
