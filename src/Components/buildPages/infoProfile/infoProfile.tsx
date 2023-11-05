import { useState, useEffect } from 'react'
import s from './infoProfile.module.css'
import { ProfileAndInfoProfileProps } from '../../../interfaces/Interfaces'
import RegionSelectTemplate, { City } from '../../modules/select/SelectTemplate'
const InfoProfile: React.FC<ProfileAndInfoProfileProps> = ({ citys }) => {
	const [profileData, setProfileData] = useState({
		email: '',
		city: '',
		phone: '',
		phone_two: '',
	})
	const [city, setCity] = useState<City | null>(null)
	const [secondPhoneInput, setSecondPhoneInput] = useState('')
	const [isSecondPhoneVisible, setIsSecondPhoneVisible] = useState(false)
	const [reload, setReload] = useState(false)

	const token = localStorage.getItem('token')

	useEffect(() => {
		const url = `http://stoneworking.ru/api/v1/profile-settings?jwt=${localStorage.getItem(
			'token'
		)}`

		fetch(url)
			.then((response) => response.json())
			.then((data) => setProfileData(data))
	}, [reload])

	const handleSave = () => {
		fetch(
			`http://stoneworking.ru/api/v1/profile-settings-replace?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					phone_two: secondPhoneInput,
				}),
			}
		)
			.then((response) => response.json())
			.then((data) => setProfileData(data))
			.then(() => setTimeout(() => setReload(!reload), 500))
	}

	const handleAddPhone = () => {
		setIsSecondPhoneVisible(true)
	}

	return (
		<div className={s.sectionContainer}>
			<h1 className={s.mainTitle}>Настройки</h1>
			<div className={s.contentContainer}>
				<div className={s.rightWrapper}>
					<p className={s.textContent}>{profileData.email}</p>
					<p className={s.textContent}>Телефоны:</p>
					{isSecondPhoneVisible ? (
						<div
							className={`${s.phoneConteiner} ${s.SeveralPhones}`}
						>
							<p className={s.textContent}>{profileData.phone}</p>
							{profileData.phone_two && (
								<p className={s.textContent}>
									{profileData.phone_two}
								</p>
							)}

							<input
								className={s.input}
								value={secondPhoneInput}
								onChange={(e) =>
									setSecondPhoneInput(e.target.value)
								}
							/>
							<p className={s.descText}>
								(можно добавить не более 2-х номеров)
							</p>
						</div>
					) : (
						<div
							className={`${s.phoneConteiner} ${s.SeveralPhones}`}
						>
							<p className={s.textContent}>{profileData.phone}</p>
							{profileData.phone_two && (
								<p className={s.textContent}>
									{profileData.phone_two}
								</p>
							)}
							<p className={s.descText}>
								(можно добавить не более 2-х номеров)
							</p>
						</div>
					)}
					<button className={s.btn} onClick={handleAddPhone}>
						Добавить номер
					</button>
				</div>
				<div className={s.leftWrapper}>
					<h2 className={s.secondTitle}>Контактная информация</h2>
					<p className={s.textContent}>Город</p>

					<RegionSelectTemplate
						setCity={setCity}
						City={city}
						Citys={citys}
					/>
					<button className={s.btn} onClick={handleSave}>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	)
}

export default InfoProfile
