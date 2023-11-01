import styles from './Reg.module.css'
import { useState } from 'react'
type RegPropsSecond = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
}
export const RegSecond = (props: RegPropsSecond) => {
	const [pass, setPass] = useState('')
	function CheakPass() {
		fetch('http://stoneworking.ru/api/v1/check-code', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: props.email, code: pass }),
		})
			.then(() => props.setStage(props.stage + 1))
			.catch((Error) => alert(Error))
	}
	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 className={styles.H2text}>Подтвердите электронную почту</h2>
				<p className={styles.PText}>
					В течении 2-х минут вам придет сообщение на ваш адрес
					электронной почты.
				</p>
				<form
					onSubmit={(e) => {
						e.preventDefault()
					}}
				>
					<input
						className={styles.InputEmail}
						type='text'
						required
						onChange={(e) => setPass(e.target.value)}
						placeholder='Введите пароль из письма'
					/>
					<button
						onClick={() => CheakPass()}
						className={styles.Continue}
					>
						Продолжить
					</button>
				</form>
			</div>
		</div>
	)
}
