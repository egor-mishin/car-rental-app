'use client';
import { Banner } from '@/shared/ui';
import { Cards } from '@/widgets';
import { banners } from '../../../_data/db';
import styles from './page.module.scss';
import { useCarsStore } from '@/app/providers';
export default function Home() {
	const cars = useCarsStore()((state) => state.cars);
	return (
		<div className="container">
			<section className={styles.banners}>
				{banners?.map((b) => (
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
