import { useEffect, useState } from 'react'
import s from './myAds.module.css'
import humburgerMob from '../../../assets/humburgerMob.svg'
export interface myAds {
	my_posts_false: adminCard[]
	my_posts_true: adminCard[]
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
const myAds = () => {
	const [posts, setPosts] = useState<myAds>()
	const [isArchive, setIsArchive] = useState(false)

	useEffect(() => {
		fetch(
			`http://31.129.105.19/api/v1/my-posts?jwt=${localStorage.getItem(
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
	}, [])
	useEffect(() => {
		console.log(posts)
	}, [posts])

	return (
		<div className={s.sectionContainer}>
			<div className={s.leftWrapper}>
				<div className={s.imageBox}>
					<img
						className={s.imageItem}
						src={posts?.photo_user}
						alt=''
					/>
				</div>
				<div className={s.textContainer}>
					<h2 className={s.userName}>{posts?.name_user}</h2>
					<div className={s.line}></div>
					<p className={s.textContent}>Мои объявления</p>
					<p className={s.textContent}>Резюме</p>
					<div className={s.line}></div>
					<p className={s.textContent}>Платные услуги</p>
					<p className={s.textContent}>Управление профилем</p>
					<p className={s.textContent}>Защита профиля</p>
					<p className={s.textContent}>Настройки</p>
				</div>
			</div>
			<div className={s.rightWrapper}>
				<div className={s.firstLine}>
					<h1 className={s.mainTitle}>Мои объявления</h1>
					<button className={s.profileBtn}>
						Профиль
						<img
							className={s.humburgerMob}
							src={humburgerMob}
							alt=''
						/>
					</button>
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
						? posts?.my_posts_true.map((item) => {
								return (
									<div key={item.id_card} className={s.cardItem}>
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
												{`Зарплата ${item.price} Р`}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{item.city
													? `Город ${item.city}`
													: `Город не указан`}
											</p>
										</div>

										<button className={s.btn}>
											Опубликовать
										</button>
									</div>
								)
						  })
						: posts?.my_posts_false.map((item) => {
								return (
									<div key={item.id_card} className={s.cardItem}>
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
												{`Зарплата ${item.price} Р`}
											</p>
											<p
												className={`${s.textInCard} ${s.textInCard}`}
											>
												{item.city
													? `Город ${item.city}`
													: `Город не указан`}
											</p>
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
