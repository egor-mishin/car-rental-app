'use client';
import { useState } from 'react';

export default function useModal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return {
		isOpen,
		toggleModal,
	};
}
