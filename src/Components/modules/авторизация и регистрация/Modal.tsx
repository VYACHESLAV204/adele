import React, { ReactNode } from 'react'
import styles from './Modal.module.css'
import closeIcon from '../../../assets/closeIcon.svg'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {
	if (!isOpen) {
		return null
	}

	return (
		<div className={styles.Modal}>
			<div className={styles.ModalContent}>
				{children}
				<button className={styles.btn} onClick={closeModal}>
					<img className={styles.closeIcon} src={closeIcon} alt="" />
				</button>
			</div>
		</div>
	)
}

export default Modal
