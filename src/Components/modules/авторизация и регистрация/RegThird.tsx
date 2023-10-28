import styles from './Reg.module.css'
import React, { useState } from 'react'

type RegPropsThird = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	isLegalEntity: 'Физическое лицо' | 'Юридическое лицо'
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
		inn: 'None',
	})

	function updateField(fieldName: string, newValue: string | number) {
		setState((prevState) => ({ ...prevState, [fieldName]: newValue }))
	}
	function SendData() {
		fetch('http://stoneworking.ru/api/v1/last-check-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state }),
		})
			.then(() => props.setStage(props.stage + 1))
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
					<input
						className={styles.InputEmail}
						type='password'
						placeholder='Пароль'
						required
						onChange={(e) =>
							updateField('password', e.target.value)
						}
					/>
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
