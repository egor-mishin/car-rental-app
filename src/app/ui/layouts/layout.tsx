import type { Metadata } from 'next';

import '../../../shared/styles/globals.scss';
import { plusJakartaSansRegular } from '../fonts/fonts';

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
			<body className={plusJakartaSansRegular.className}>{children}</body>
		</html>
	);
}
