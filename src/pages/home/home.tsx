import styles from './page.module.scss';
import { banners } from '../../../_data/db';
import { Banner } from '@/shared/ui';
export default function Home() {
	return (
		<div className="container">
			<section className={styles.banners}>
				{banners.map((b) => (
					<Banner {...b} />
				))}
			</section>
		</div>
	);
}
