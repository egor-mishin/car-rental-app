import { PERIOD } from '@/shared/lib/constants';
import { Card, Htag } from '@/shared/ui';
import styles from './Cards.module.scss';
import { CardsProps } from './Cards.props';
import { cars } from '../../../_data/db';
export const Cards = ({ title }: CardsProps) => {
	return (
		<>
			<Htag tag="h3" className={styles.cardsTitle}>
				{title}
			</Htag>
			<div className={styles.cards}>
				{cars &&
					cars.map((car) => (
						<Card
							title={car.model}
							subtitle={car.type}
							period={PERIOD.DAY}
							slug={car.type}
							discount={car.discount}
							{...car}
						/>
					))}
			</div>
		</>
	);
};
