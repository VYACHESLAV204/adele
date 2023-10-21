import { useState } from 'react'
import s from './Search.module.css'
import lens from '../../../assets/lens.svg'
const InputButton = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleButtonClick = () => {
		console.log('Введенное значение:', inputValue)
		// Дополнительная логика или вызов других функций
	}

	return (
		<div className={s.MainSearchDiv}>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Введите значение'
				className={s.Input}
			/>
			<button className={s.Button}>
				<img
					src={lens}
					className={s.Img}
					onClick={handleButtonClick}
				></img>
			</button>
		</div>
	)
}

export default InputButton
