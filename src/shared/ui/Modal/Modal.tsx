import cn from 'classnames';
import styles from './Modal.module.scss';
import { getIcon } from '@/shared/lib/getIcon';
import { ICONS } from '@/shared/lib/constants';
export const Modal = ({ children, isOpen, toggleModal }) => {
	const icon = getIcon(ICONS.CLOSE);
	return (
		<div
			style={isOpen ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
			className={styles.modalOverlay}
		>
			<div className={styles.modalBox}>
				<span className={styles.closeButton} onClick={toggleModal}>
					{icon}
				</span>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};
