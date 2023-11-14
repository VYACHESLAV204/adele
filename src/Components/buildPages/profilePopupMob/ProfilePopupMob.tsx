import s from './ProfilePopupMob.module.css'
import photo from '../../../assets/phototool.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const ProfilePopupMob = () => {
	const name = localStorage.getItem('username')
	

	const [reloadCount, setReloadCount] = useState(0)

	const handleReload = () => {
		setReloadCount(reloadCount + 1)
		window.location.reload()
	}

	function logout() {
		fetch(
			`http://stoneworking.ru/api/v1/logout?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => console.log(res))
			
			.then(() => {
				localStorage.removeItem('token'),
					localStorage.setItem('status', '')
			})
			.then(() => handleReload())
	}

	return (
		<div className={s.sectionContainer}>
			<div className={s.leftWrapper}>
				<div className={s.imageBox}>
					<img
						style={{ border: 'solid 1.2px blue' }}
						className={s.imageItem}
						src={photo}
						alt=''
					/>
				</div>
				<div className={s.textContainer}>
					<h2 className={s.userName}>{name}</h2>
					<div className={s.line}></div>
					<NavLink to={'/my-ads/'}>
						<p className={s.textContent}>Мои объявления</p>
					</NavLink>
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
					<p className={s.textContent} onClick={logout}>
						Выйти{' '}
					</p>
					<a href='/new-card/'>
						<button className={s.newCardBtn}>
							Разместить объявление
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProfilePopupMob
