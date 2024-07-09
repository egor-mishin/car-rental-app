import styles from './page.module.scss';
import { Banner } from '@/shared/ui';
import { banners, cars } from '../../../_data/db';
import { Cards } from '@/widgets';
export default function Home() {
	return (
		<div className="container">
			<section className={styles.banners}>
				{banners.map((b) => (
					<Banner {...b} />
				))}
			</section>

			<section className={styles.cards}>
				<Cards cars={cars} title="Popular Cars" />
				<Cards cars={cars} title="Recommendation Cars" />
			</section>
		</div>
	);
}
