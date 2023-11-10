import styles from './Reg.module.css'
import React, { useState } from 'react'

type RegPropsThird = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	isLegalEntity: 'Физическое лицо' | 'Юридическое лицо'
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsLegalEntity: React.Dispatch<
		React.SetStateAction<'Физическое лицо' | 'Юридическое лицо'>
	>
}

const RegThird: React.FC<RegPropsThird> = (props) => {
	const [state, setState] = useState({
		email: props.email,
		subject: props.isLegalEntity,
		name_profile: '',
		phone: '',
		password: '',
		isPasswordShown: false,
		inn: 'None',
	})

	function updateField(fieldName: string, newValue: string | number | boolean) {
		setState((prevState) => ({ ...prevState, [fieldName]: newValue }))
	}
	function SendData() {
		if (state.name_profile.trim().length === 0
			|| state.phone.trim().length
			|| state.password.trim().length === 0) {
				return;
		}
		fetch('http://stoneworking.ru/api/v1/last-check-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state }),
		})
			.then(() => props.setStage(props.stage + 1))
			.then(() => props.setModalType('auth'))
			.catch((Error) => alert(Error))
	}
	return (
		<div className={styles.MainDivFirstPopUp}>
			<h2 className={styles.H2text}>Регистрация</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<div className={styles.selectDiv}>
					<label className={styles.label} htmlFor='1'>
						Тип субъекта
					</label>
					<select
						className={styles.TypeSelect}
						onChange={(event) =>
							props.setIsLegalEntity(
								event.target.value as
									| 'Физическое лицо'
									| 'Юридическое лицо'
							)
						}
						id='1'
					>
						<option value='Физическое лицо'>Физическое лицо</option>
						<option value='Юридическое лицо'>
							Юридическое лицо
						</option>
					</select>
				</div>
				<div>
					<input
						className={styles.InputEmail}
						type='text'
						placeholder='Имя профиля'
						required
						onChange={(e) =>
							updateField('name_profile', e.target.value)
						}
					/>
					<input
						className={styles.InputEmail}
						type='number'
						placeholder='Телефон'
						required
						onChange={(e) => updateField('phone', e.target.value)}
					/>
					{/* show password label */}
					<div className={styles.PasswordInput}>
						<input
							className={styles.InputEmail}
							type={state.isPasswordShown ? 'text' :'password'}
							placeholder='Пароль'
							required
							onChange={(e) =>
								updateField('password', e.target.value)
							}
						/>
						<div
							className={`${styles.Eye} ${state.isPasswordShown && styles.EyeHidden}`}
							onClick={() => 
								updateField('isPasswordShown', !state.isPasswordShown)} 
						/>
					</div>
					{props.isLegalEntity === 'Юридическое лицо' && (
						<input
							required
							type='number'
							className={styles.InputEmail}
							placeholder='ИНН'
							onChange={(e) =>
								updateField('inn', parseInt(e.target.value))
							}
						/>
					)}
				</div>
				<button onClick={SendData} className={styles.Continue}>
					Продолжить
				</button>
			</form>
		</div>
	)
}

export default RegThird
