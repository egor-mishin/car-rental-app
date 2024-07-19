import { Footer, Header } from '@/widgets';
import type { Metadata } from 'next';
import '../../app/styles/main.scss';
import { plusJakartaSansRegular } from '../../app/ui/fonts';
import { AppLoader } from '../loaders/app-loader';

export const metadata: Metadata = {
	title: 'Car Rental App',
	description: 'Car Rental Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={plusJakartaSansRegular.className}>
				<AppLoader>
					<Header />
					<div className="container">
						<div className="main">{children}</div>
					</div>
					<Footer />
				</AppLoader>
			</body>
		</html>
	);
}
