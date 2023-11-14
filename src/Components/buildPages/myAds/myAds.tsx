import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './myAds.module.css'
import humburgerMob from '../../../assets/humburgerMob.svg'
export interface myAds1 {
	my_posts_false: adminCard[]
	my_posts_true: adminCard[]
	my_posts_none: adminCard[]
	name_user: string
	photo_user: string
	status: boolean
}
interface adminCard {
	caption: string
	category: string
	city: string
	description: string
	email: string
	id_card: number
	id_user: string
	path_file: string
	phone: string
	price: string
	sub_category: string
	tariff: string
	username: string
}
import profileDefaultPhoto from '../../../assets/phototool.png'
const myAds = () => {
	const [posts, setPosts] = useState<myAds1>()
	const [isArchive, setIsArchive] = useState(false)
	const [Action, setAction] = useState('exit_archive')
	const [ThisId, setThisId] = useState(1)
	const [reload, setReload] = useState(false)
	useEffect(() => {
		function deletePost(id: number) {
			fetch(
				`http://stoneworking.ru/api/v1/delete-post?jwt=${localStorage.getItem(
					'token'
				)}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id_card: id,
						del: Action,
					}),
				}
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setReload(!reload)
				})
				.catch((error) => {
					console.error('Ошибка:', error)
				})
		}

		deletePost(ThisId)
	}, [ThisId, Action])
	useEffect(() => {
		fetch(
			`http://stoneworking.ru/api/v1/my-posts?jwt=${localStorage.getItem(
				'token'
			)}`
		)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data)
				console.log(data)
			})
			.catch((error) => {
				console.error('Ошибка:', error)
			})
	}, [reload])
	useEffect(() => {
		console.log(posts)
	}, [posts])

	return (
		<div className={s.sectionContainer}>
			<div className={s.leftWrapper}>
				<div className={s.imageBox}>
					<img
						style={{ border: '1.2px solid blue' }}
						className={s.imageItem}
						src={
							posts?.photo_user
								? posts.photo_user
								: profileDefaultPhoto
						}
						alt=''
					/>
				</div>
				<div className={s.textContainer}>
					<h2 className={s.userName}>{posts?.name_user}</h2>
					<div className={s.line}></div>
					<p className={s.textContent}>Мои объявления</p>
					<NavLink to={'/summary/'}>
						<p className={s.textContent}>Резюме</p>
					</NavLink>
					<div className={s.line}></div>
					<p className={s.textContent}>Оплата объявлений</p>
					<NavLink to={'/info-profile/'}>
						<p className={s.textContent}>Управление профилем</p>
					</NavLink>
					<NavLink to={'/defence/'}>
						<p className={s.textContent}>Защита профиля</p>
					</NavLink>
					<NavLink to={'/profile/'}>
						<p className={s.textContent}>Настройки</p>
					</NavLink>
				</div>
			</div>
			<div className={s.rightWrapper}>
				<div className={s.firstLine}>
					<h1 className={s.mainTitle}>Мои объявления</h1>
					<NavLink style={{ cursor: 'pointer' }} to={'/profile-mob/'}>
						<button
							style={{ cursor: 'pointer' }}
							className={s.profileBtn}
						>
							Профиль
							<img
								className={s.humburgerMob}
								src={humburgerMob}
								alt=''
								style={{ cursor: 'pointer' }}
							/>
						</button>
					</NavLink>
				</div>
				<div className={s.btnBox}>
					{isArchive ? (
						<button
							onClick={() => setIsArchive(false)}
							className={`${s.btn} ${s.secondBtn}`}
						>
							Ждут действий
						</button>
					) : (
						<button
							onClick={() => setIsArchive(false)}
							className={s.btn}
						>
							Ждут действий
						</button>
					)}
					{isArchive ? (
						<button
							onClick={() => setIsArchive(true)}
							className={s.btn}
						>
							Архив
						</button>
					) : (
						<button
							onClick={() => setIsArchive(true)}
							className={`${s.btn} ${s.secondBtn}`}
						>
							Архив
						</button>
					)}
				</div>
				<div className={s.cardBox}>
					{isArchive
						? posts?.my_posts_none.map((item) => {
								return (
									<div
										key={item.id_card}
										className={s.cardItem}
									>
										<p
											className={`${s.textContent} ${s.colorPurple} ${s.titleMob}`}
										>
											{item.caption}
										</p>
										<img
											className={s.cardImg}
											src={item.path_file[0]}
											alt=''
										/>
										<div className={s.cardText}>
											<p
												className={`${s.textContent} ${s.colorPurple} ${s.textDesctop}`}
											>
												{item.caption}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{`${item.price} Р`}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{item.city
													? `Город ${item.city}`
													: `Город не указан`}
											</p>
										</div>

										<div className={s.divButton}>
											<select
												onChange={(e) => {
													setAction(e.target.value)
													setThisId(item.id_card)
												}}
												defaultValue={''}
												className={`${s.btn} ${s.btnWActions} ${s.marginZero}`}
											>
												<option value='exit_archive'>
													Выберите действие
												</option>
												<option value='exit_archive'>
													Опубликовать
												</option>

												<option value='delete'>
													Удалить
												</option>
											</select>
										</div>
									</div>
								)
						  })
						: posts?.my_posts_false.map((item) => {
								return (
									<div
										key={item.id_card}
										className={s.cardItem}
									>
										<p
											className={`${s.textContent} ${s.colorPurple} ${s.titleMob}`}
										>
											{item.caption}
										</p>
										<img
											className={s.cardImg}
											src={item.path_file[0]}
											alt=''
										/>
										<div className={s.cardText}>
											<p
												className={`${s.textContent} ${s.colorPurple} ${s.textDesctop}`}
											>
												{item.caption}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{`${item.price} Р`}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{item.city
													? `Город ${item.city}`
													: `Город не указан`}
											</p>
											<div className={s.divButton}>
												<select
													onChange={(e) => {
														setAction(
															e.target.value
														)
														setThisId(item.id_card)
													}}
													className={`${s.btn} ${s.btnWActions} ${s.marginZero}`}
												>
													<option value=''>
														Выберите действие
													</option>
													<option value='push_archive'>
														Убрать в архив
													</option>
													<option value='delete'>
														Удалить
													</option>
												</select>
											</div>
										</div>
									</div>
								)
						  })}
				</div>
			</div>
		</div>
	)
}

export default myAds
