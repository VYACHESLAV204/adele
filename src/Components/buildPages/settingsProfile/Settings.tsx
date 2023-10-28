

import { NavLink } from 'react-router-dom'
import s from './Settings.module.css'
import { useState, useEffect } from 'react'
interface settingsFetch {
	username: string
	phone: string
	status: boolean
}
function Settings() {
	const [settingsData, setSettingsData] = useState<settingsFetch>()

	useEffect(() => {
		fetch(
			`http://stoneworking.ru/api/v1/profile-management?jwt=${localStorage.getItem(
				'token'
			)}`
		)
			.then((response) => response.json())
			.then((data: settingsFetch) => setSettingsData(data))
	}, [])

	return (
		<div className={s.settingsSection}>
			<h1 className={s.mainTitle}>Управление профилем</h1>
			<div className={s.selectorBox}>
				<div className={`${s.slider} ${s.sliderOptions}`}>
					<div className={s.selectContainer}>
						<h2 className={s.sliderTextItem}>Основные данные</h2>

						<div className={s.lineActive} />
					</div>
					<div className={s.selectContainer}>
						<NavLink
							style={{ textDecoration: 'none', color: 'inherit' }}
							to={'/info-profile/'}
						>
							<h3
								className={`${s.sliderTextItem} ${s.sliderMargin}`}
							>
								Вид профиля
							</h3>
						</NavLink>

						<div className={s.lineUnActive}></div>
					</div>
				</div>
			</div>
			<div className={s.sectionBox}>
				<div className={`${s.firstLineContainer} ${s.lineContainer}`}>
					<p className={s.lineInfo}>Номер в профиле:</p>
					<p className={s.lineInfo}>Имя в профиле:</p>
				</div>
				<div className={`${s.firstLineContainer} ${s.lineContainer}`}>
					<p className={s.lineInfo}>{settingsData?.phone}</p>
					<p className={s.lineInfo}>{settingsData?.username}</p>
				</div>
				<div className={`${s.firstLineContainer} ${s.lineContainer}`}>
					<NavLink to={'/profile/'}>
						<p className={s.lineLink}>Посмотреть</p>
					</NavLink>
					<NavLink to={'/profile/'}>
						<p className={s.lineLink}>Изменить профиль</p>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Settings