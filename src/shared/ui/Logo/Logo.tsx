import Link from 'next/link';
import Logotype from '../../assets/Logo.svg';
export const Logo = () => {
	return (
		<Link href="/">
			<Logotype />
		</Link>
	);
};
