import { useEffect, useState } from 'react'
import s from './moderation.module.css'

import greenMoney from '../../../assets/greenmoney.svg'
import { CardMod } from '../../../interfaces/Interfaces'
interface Imoderation {
	cards_check: CardMod[]
	cards_nocheck: CardMod[]
	photo: string
	status: boolean
	username: string
}
const moderation = () => {
	const [posts, setPosts] = useState<Imoderation>()
	const [isArchive, setIsArchive] = useState(false)
	const [reload, setReload] = useState(false)

	const parsePrice = (price: string) => {
		const readyToParseString = price.toString().split('').filter((char) => char !== ' ').join('')
		return readyToParseString
			.split('')
			.reverse()
			.join('')
			.match(/.{1,3}/g)
			?.reverse()
			.map((el) => el.split('').reverse().join(''))
			.join(' ')
	}

	function deletePost(
		id_card: number,
		id_user: string,
		Action: string | null
	) {
		fetch(
			`http://stoneworking.ru/check_admin_posts?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id_card: id_card,
					id_user: id_user,
					status_card: Action,
				}),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setPosts(undefined)
				setReload(!reload)
			})
			.catch((error) => {
				console.error('Ошибка:', error)
			})
	}

	useEffect(() => {
		fetch(
			`http://stoneworking.ru/get_admin_posts?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST', // или 'PUT'
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: 1,
					page: 1,
				}),
			}
		)
			.then((response) => response.json())
			.then((data: Imoderation) => {
				setPosts(data)
				console.log(data)
			})
			.catch((error) => {
				console.error('Ошибка:', error)
			})
	}, [reload])

	useEffect(() => {
		console.log(posts)
	}, [])

	return (
		<div className={s.sectionContainer}>
			<h1 className={`${s.mainTitle} ${s.marginTop}`}>
				Модерация объявлений
			</h1>
			<div className={s.btnBox}>
				<button
					onClick={() => setIsArchive(false)}
					className={isArchive ? `${s.btn} ${s.secondBtn}` : s.btn}
				>
					Ждут действий
				</button>

				<button
					onClick={() => setIsArchive(true)}
					className={
						isArchive
							? `${s.btn} ${s.active}`
							: `${s.btn} ${s.secondBtn}`
					}
				>
					Архив
				</button>
			</div>
			<div className={s.cardContainer}>
				{!isArchive
					? posts?.cards_check.map((item) => {
							return (
								<div key={item.id_card} className={s.cardItem}>
									<img
										className={s.cardPhoto}
										src={item.path_file[0]}
										alt=''
									/>
									<div className={s.textContainer}>
										<p
											className={`${s.mainTitle} ${s.colorPurple}`}
										>
											{item.caption}
										</p>
										<div className={s.priceBox}>
											<p className={s.priceTitle}>
												{parsePrice(item.price)}
											</p>
											<img
												className={s.priceIco}
												src={greenMoney}
												alt=''
											/>
										</div>
										<p className={s.secondTitle}>
											Описание:
										</p>
										<p className={s.titleDescription}>
											{item.description}
										</p>
										<p className={s.secondTitle}>
											{item.username}
										</p>

										<div className={s.cityBox}>
											<p className={s.titleText}>Город</p>
											<p className={s.titleDescription}>
												{item.city}
											</p>
										</div>
									</div>
									<div className={s.btnActions}>
										<button
											onClick={() =>
												deletePost(
													item.id_card,
													item.id_user,
													'True'
												)
											}
											className={s.btn}
										>
											Опубликовать
										</button>
										<button
											className={`${s.btn} ${s.secondBtn2}`}
											onClick={() =>
												deletePost(
													item.id_card,
													item.id_user,
													'null'
												)
											}
										>
											Отклонить
										</button>
									</div>
								</div>
							)
					  })
					: posts?.cards_nocheck.map((item) => {
							return (
								<div key={item.id_card} className={s.cardItem}>
									<img
										className={s.cardPhoto}
										src={item.path_file[0]}
										alt=''
									/>
									<div className={s.textContainer}>
										<p
											className={`${s.mainTitle} ${s.colorPurple}`}
										>
											{item.caption}
										</p>
										<div className={s.priceBox}>
											<p className={s.priceTitle}>
												{parsePrice(item.price)}
											</p>
											<img
												className={s.priceIco}
												src={greenMoney}
												alt=''
											/>
										</div>
										<p className={s.secondTitle}>
											Описание:
										</p>
										<p className={s.titleDescription}>
											{item.description}
										</p>
										<p className={s.secondTitle}>
											{item.username}
										</p>

										<div className={s.cityBox}>
											<p className={s.titleText}>Город</p>
											<p className={s.titleDescription}>
												{item.city}
											</p>
										</div>
									</div>
									<div className={s.btnActions}>
										<button
											onClick={() =>
												deletePost(
													item.id_card,
													item.id_user,
													'False'
												)
											}
											className={s.btn}
										>
											Вернуть на модерацию
										</button>
										<button
											onClick={() =>
												deletePost(
													item.id_card,
													item.id_user,
													null
												)
											}
											className={`${s.btn} ${s.secondBtn2}`}
										>
											Удалить
										</button>
									</div>
								</div>
							)
					  })}
			</div>
		</div>
	)
}

export default moderation
