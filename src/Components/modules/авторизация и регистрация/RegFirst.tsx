import styles from './Reg.module.css'
type RegPropsFirst = {
	stage: number
	setStage: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
}
const RegFirst = (props: RegPropsFirst) => {
	function SendMail() {
		//валидирует только наличие
		if (props.email.trim().length === 0) {
			return;
		}
		fetch('http://stoneworking.ru/api/v1/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: props.email }),
		})
		.then(() => props.setStage(props.stage +1))
		.catch((Error) => alert(Error))
	}
	return (
		<div className={styles.MainDivFirstPopUp}>
			<div className={styles.innerDiv}>
				<h2 style={{marginTop: '1.5rem'}} className={styles.H2text}>Регистрация</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault()
					
					}}
				>
					<input
						onChange={(e) => props.setEmail(e.target.value)}
						className={styles.InputEmail}
						type='email'
						placeholder='info@infomail.ru'
						required
					/>
					<button
						onClick={() => SendMail()}
						className={styles.Continue}
					>
						Продолжить
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegFirst
