import { useState, useEffect } from 'react'
import s from './Search.module.css'
import lens from '../../../assets/lens.svg'
import { NavLink } from 'react-router-dom'
import arrowImg from '../../../assets/Menu arrow.svg'
interface MyComponentProps {
	styles: React.CSSProperties
}
interface Isearch {
	card_results: { caption: string; summary?: boolean; id_card: number }[]
}
const InputButton: React.FC<MyComponentProps> = ({ styles }) => {
	const [inputValue, setInputValue] = useState('')
	const [res, setRes] = useState<Isearch>()

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const [timer, setTimer] = useState<number | null>(null)

	const fetchData = () => {
		if (inputValue) {
			fetch('http://stoneworking.ru/api/v1/search', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ search_term: inputValue }),
			})
				.then((res) => res.json())
				.then((data: Isearch) => setRes(data))
		}
	}
	useEffect(() => {
		// Сбросите предыдущий таймер, если он существует
		if (timer) {
			clearTimeout(timer)
		}

		// Устанавливаем новый таймер с задержкой, например, 1000 миллисекунд (1 секунда)
		const newTimer = setTimeout(() => {
			// Выполняйте fetch-запрос после задержки
			fetchData()
		}, 1000) // Установите нужную задержку здесь

		// Сохраните идентификатор нового таймера в состоянии
		setTimer(newTimer)
	}, [inputValue])
	return (
		<div style={styles} className={s.MainSearchDiv}>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Поиск объявления'
				className={s.Input}
			/>
			<button className={s.Button}>
				<img src={lens} className={s.Img}></img>
			</button>
			{res && (
				<div
					style={{
						height: '300px',
						width: '250px',
						position: 'relative',
						left: '-262px',
						top: '160px',
					}}
				>
					<ul
						style={{
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						{res.card_results.map((item) => {
							if (item.summary) {
								return (
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<NavLink
											key={item.id_card}
											to={`/worker/:id${item.id_card}`}
										>
											<li>{item.caption}</li>
										</NavLink>
										<img src={arrowImg} alt='' />
									</div>
								)
							} else {
								return (
									<div
										className={s.liDiv}
										style={{
											display: 'flex',
											marginBottom: '8px',
											border: '1px solid #9090d8',
											borderRadius: '5px 10px 0px 0px',
											alignItems: 'center',
											height: '37px',
										}}
									>
										<NavLink
											key={item.id_card}
											style={{
												textAlign: 'left',
												width: '160px',
												whiteSpace: 'nowrap',
												textOverflow: 'ellipsis',
												overflow: 'hidden',
												marginRight: '20px',
											}}
											to={`/card/:id${item.id_card}`}
										>
											<li
												style={{
													textAlign: 'left',
													width: '160px',
													whiteSpace: 'nowrap',
													textOverflow: 'ellipsis',
													overflow: 'hidden',
													paddingLeft: '7px',
												}}
											>
												{item.caption}
											</li>
										</NavLink>
										<img src={arrowImg} alt='' />
									</div>
								)
							}
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default InputButton
