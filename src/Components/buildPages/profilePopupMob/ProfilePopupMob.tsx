import s from './ProfilePopupMob.module.css'
import photo from '../../../assets/photoFromInnerCard.png'
import { NavLink } from 'react-router-dom'

const ProfilePopupMob = () => {
	return (
		<div className={s.sectionContainer}>
			<div className={s.leftWrapper}>
				<div className={s.imageBox}>
					<img className={s.imageItem} src={photo} alt='' />
				</div>
				<div className={s.textContainer}>
					<h2 className={s.userName}>Имя пользователя</h2>
					<div className={s.line}></div>
					<NavLink to={'/my-ads/'}>
						<p className={s.textContent}>Мои объявления</p>
					</NavLink>
					<NavLink to={'/summary/'}>
						<p className={s.textContent}>Резюме</p>
					</NavLink>
					<div className={s.line}></div>
					<p className={s.textContent}>Платные услуги</p>
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
		</div>
	)
}

export default ProfilePopupMob
