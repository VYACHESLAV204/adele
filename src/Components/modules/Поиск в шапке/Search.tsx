import { useState, useEffect } from 'react'
import s from './Search.module.css'
import lens from '../../../assets/lens.svg'
import { NavLink } from 'react-router-dom'
import arrowImg from '../../../assets/Menu arrow.svg'
import { iResult, Isearch } from '../../../interfaces/Interfaces'
const InputButton: React.FC<Isearch> = ({
	styles,
	inputValue,
	setInputValue,
	setIsOpen,
	res,
	setRes,
	isOpen,
}) => {
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
				.then((data: iResult) => {
					setRes(data)
				})
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
		<div
			onClick={() => setIsOpen(!isOpen)}
			style={styles}
			className={s.MainSearchDiv}
		>
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
			{res.card_results.length > 2 && isOpen && (
				<div
					className={s.searchDropDown}
					style={{
						height: '300px',
						width: '250px',
						position: 'relative',
						left: '-250px',
						top: '178px',
						border: '2px solid #9090d8',
						borderRadius: '4px',
						backgroundColor: '#fff',
					}}
				>
					<ul
						style={{
							margin: '0px',
							padding: '10px 10px 10px 10px',
							width: '230px',
							height: '280px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							overflowY: 'auto',
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
											to={`/worker/${item.id_card}`}
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
											to={`/card/${item.id_card}`}
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
