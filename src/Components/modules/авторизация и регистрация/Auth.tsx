import styles from './Reg.module.css'
import React, { useState, FormEvent } from 'react'
import hidePassword from '../../../assets/mdi_hide-outline.svg'
interface ModalProps {
	closeModal: () => void
	setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>
}
const Auth: React.FC<ModalProps> = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()

		try {
			const response = await fetch('http://31.129.105.19/api/v1/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			})
			const data = await response.json()
			localStorage.setItem('token', data.token)
			if (data.token) {
				props.setIsLoggin(true)
				props.closeModal()
			}
		} catch (error) {
			console.error(error) // Here you can handle the error
		}
	}

	return (
		<div className={styles.MainDivFirstPopUp}>
			<h2 className={styles.H2text}>Вход</h2>
			<div className={styles.innerDiv}>
				<form className={styles.myForm} onSubmit={(e) => onSubmit(e)}>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className={styles.InputEmail}
						type='email'
						placeholder='Электронная почта'
						required
					/>
					<img
						className={styles.hidePassword}
						src={hidePassword}
						alt=''
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className={styles.InputEmail}
						type='password'
						placeholder='Пароль'
						required
					/>
					<button className={styles.Continue}>Продолжить</button>
				</form>
			</div>
			<div className={styles.line}></div>
			<a href=''>
				<p style={{ color: '#5250C5' }} className={styles.register}>
					Регистрация
				</p>
			</a>
			<div className={styles.textContainer}>
				<p className={styles.textSimple}>
					При входе вы подтверждаете согласие с{' '}
					<span
						className={`${styles.register} ${styles.colorDefalt}`}
					>
						условиями пользования
					</span>{' '}
					и{' '}
					<span
						className={`${styles.register} ${styles.colorDefalt}`}
					>
						политикой конфиденциальности
					</span>
				</p>
			</div>
		</div>
	)
}

export default Auth
