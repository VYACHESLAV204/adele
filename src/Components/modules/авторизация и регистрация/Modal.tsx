import React, { ReactNode, useEffect, useRef } from 'react'
import styles from './Modal.module.css'
import closeIcon from '../../../assets/closeIcon.svg'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {

	const modalRef = useRef<HTMLDivElement>(null);
	
	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			closeModal();
			console.log('woooow')

		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, closeModal]);
	return isOpen ? (
		<div className={styles.Modal}>
			<div ref={modalRef} className={styles.ModalContent}>
				{children}
				<button className={styles.btn} onClick={closeModal}>
					<img className={styles.closeIcon} src={closeIcon} alt="" />
				</button>
			</div>
		</div>
	) : null;
}

export default Modal
