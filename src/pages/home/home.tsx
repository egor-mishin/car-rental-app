import { Banner } from '@/shared/ui';
import { banners, cars } from '../../../_data/db';
import styles from './page.module.scss';
import { Cards } from '@/widgets/Cards/Cards';
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
