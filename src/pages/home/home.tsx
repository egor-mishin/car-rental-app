'use client';
import { useBannersStore, useCarsStore } from '@/app/providers';
import { Banner, TextInput } from '@/shared/ui';
import { Cards } from '@/widgets';
import styles from './page.module.scss';
export default function Home() {
	const cars = useCarsStore()((state) => state.cars);
	const banners = useBannersStore()((state) => state.banners);
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
