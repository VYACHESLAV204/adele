import { useEffect, useState } from 'react'
import s from './myAds.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import editPen from '../../../assets/editPan.svg'
import humburgerMob from '../../../assets/humburgerMob.svg'

const myAds = () => {
	const [posts, setPosts] = useState([])
    const [archive, setArchive] = useState(false)

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
  console.log(posts);
  
}, [posts])

	return (
		<div className={s.sectionContainer}>
			<div className={s.leftWrapper}>
				<div className={s.imageBox}>
					<img className={s.imageItem} src={photo} alt='' />
					<div className={s.imageIcon}>
						<img className={s.iconItem} src={editPen} alt='' />
					</div>
				</div>
				<div className={s.textContainer}>
					<h2 className={s.userName}>Имя пользователя</h2>
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
					<button className={s.btn}>Ждут действий</button>
					<button className={`${s.btn} ${s.secondBtn}`}>Архив</button>
				</div>
				<div className={s.cardBox}>
					<div className={s.cardItem}>
						<p
							className={`${s.textContent} ${s.colorPurple} ${s.titleMob}`}
						>
							Объявление 1
						</p>
						<img className={s.cardImg} src={photo} alt='' />
						<div className={s.cardText}>
							<p
								className={`${s.textContent} ${s.colorPurple} ${s.textDesctop}`}
							>
								Объявление 1
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Зарплата не указана
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Москва
							</p>
						</div>
						<button className={s.btn}>Опубликовать</button>
					</div>
					<div className={s.cardItem}>
						<p
							className={`${s.textContent} ${s.colorPurple} ${s.titleMob}`}
						>
							Объявление 1
						</p>
						<img className={s.cardImg} src={photo} alt='' />
						<div className={s.cardText}>
							<p
								className={`${s.textContent} ${s.colorPurple} ${s.textDesctop}`}
							>
								Объявление 1
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Зарплата не указана
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Москва
							</p>
						</div>
						<button className={s.btn}>Опубликовать</button>
					</div>
					<div className={s.cardItem}>
						<p
							className={`${s.textContent} ${s.colorPurple} ${s.titleMob}`}
						>
							Объявление 1
						</p>
						<img className={s.cardImg} src={photo} alt='' />
						<div className={s.cardText}>
							<p
								className={`${s.textContent} ${s.colorPurple} ${s.textDesctop}`}
							>
								Объявление 1
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Зарплата не указана
							</p>
							<p className={`${s.textInCard} ${s.textInCard}`}>
								Москва
							</p>
						</div>
						<button className={s.btn}>Опубликовать</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default myAds
