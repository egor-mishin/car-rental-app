import type { Metadata } from 'next';
import '../../app/styles/main.scss';
import { plusJakartaSansRegular } from '../../app/ui/fonts';
import { Footer } from '../footer/ui/footer';
import { Header } from '../header';

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
				<div className="container">
					<Header />
					<div className="main">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
