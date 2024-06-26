import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../../shared/styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}