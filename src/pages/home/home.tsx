import { Button } from '@/shared/ui/Button/Button';
import { FavButton } from '@/shared/ui/FavButton/FavButton';
import { Price } from '@/shared/ui/Price/Price';
import { Rating } from '@/shared/ui/Rating/Rating';
import { CURRENCY, PERIOD } from '@/shared/constants/currencies';

export default function Home() {
	return (
		<>
			<Button
				title="label"
				appearance="primary"
				iconLabel="wechat"
				kind="icon-right"
				size="large"
			/>
			<Button
				title="Label"
				appearance="primary"
				iconLabel="wechat"
				kind="icon-right"
				size="medium"
			/>
			<Button
				title="Label"
				appearance="primary"
				iconLabel="wechat"
				kind="icon-right"
				size="small"
			/>

			<Button
				title="Label"
				appearance="secondary"
				iconLabel="wechat"
				kind="icon-right"
				size="small"
			/>
			<Button
				title="Label"
				appearance="secondary"
				iconLabel="wechat"
				kind="icon-right"
				size="small"
			/>
			<Rating rating={3} isEditable />
			<FavButton isFavorite />
			<Price period={PERIOD.DAY} price="500.00" currency={CURRENCY.USD} discount="200.00" />
		</>
	);
}
