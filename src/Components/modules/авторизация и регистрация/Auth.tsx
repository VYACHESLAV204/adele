import styles from './Reg.module.css'
import React, { useState, FormEvent } from 'react'


interface ModalProps {
	closeModal: () => void
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
}
const Auth: React.FC<ModalProps> = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			const response = await fetch(
				'http://stoneworking.ru/api/v1/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				}
			)
			const data = await response.json()
			if (data.status) {
				localStorage.setItem('token', data.token)
				localStorage.setItem('status', data.status)
				localStorage.setItem('username', data.username)
				props.closeModal()
			}else if(data.error){
				alert(data.error)
			}
		} catch(error) {
			alert(error)
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
						name='email'
						placeholder='Электронная почта'
						required
					/>
					<div className={styles.PasswordInput}>
						<input
							onChange={(e) => setPassword(e.target.value)}
							className={styles.InputEmail}
							type={isPasswordShown ? 'text' :'password'}
							name='password'
							placeholder='Пароль'
							required
						/>
						<div
								className={`${styles.Eye} ${isPasswordShown && styles.EyeHidden}`}
								onClick={() => 
									setIsPasswordShown(!isPasswordShown)} 
							/>
						</div>
					<button className={styles.Continue} type='submit' >Продолжить</button>
				</form>
			</div>
			<div className={styles.line}></div>
			<a onClick={() => props.setModalType('reg')}>
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
