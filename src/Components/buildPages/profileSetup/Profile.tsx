import React, { useEffect, useState } from 'react'
import s from './Profile.module.css'
import editPan from '../../../assets/editPan.svg'
import RegionSelectTemplate, { City } from '../../modules/select/SelectTemplate'
import WorkMan from '../../../assets/phototool.png'
interface ProfileProps {
	citys: City[]
	City: City | null
	setCity: React.Dispatch<React.SetStateAction<City | null>>
}

const Profile: React.FC<ProfileProps> = ({ citys }) => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [city, setCity] = useState<City | null>({
		label: '',
		value: '',
	})
	const [photo, setPhoto] = useState<File>()
	const [photo_get, setPhoto_get] = useState('')
	const [ThisPhoto, setThisPhoto] = useState<string | undefined>('')

	useEffect(() => {
		fetch(
			`http://stoneworking.ru/api/v1/profile-settings?jwt=${localStorage.getItem(
				'token'
			)}`
		)
			.then((response) => response.json())
			.then((data) => {
				setEmail(data.email)
				setName(data.username)
				setCity({ value: data.city, label: data.city })
				setPhoto_get(data.photo)
			})
	}, [])
	async function logout() {
		const password = localStorage.getItem('password')

		try {
			const response = await fetch(
				'http://stoneworking.ru/api/v1/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				}
			)
			const data = await response.json()
			if (data.status) {
				localStorage.setItem('token', data.token)
				localStorage.setItem('status', data.status)
				localStorage.setItem('username', data.username)
			} else if (data.error) {
				alert(data.error)
			}
		} catch (error) {
			alert(error)
		}
	}

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setPhoto(event.target.files[0])
		}
	}

	const formData = new FormData()
	formData.append('email', email)
	formData.append('username', name)
	if (photo) {
		formData.append('photo', photo)
	}

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		fetch(
			`http://stoneworking.ru/api/v1/profile-settings-post?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',

				headers: {
					//	'Content-Type':
					// 'application/x-www-form-urlencoded',
					Accept: '*/*',
					'Access-control-Allow-origin': '*',
				},
				body: formData,
			}
		)
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
				throw new Error('Error when trying to send data')
			})
			.then((data) => {
				console.log('Data saved successfully', data)
			})
			.then(() => {
				if (email != '') {
					logout()
				}
			})
			.catch((error) => {
				console.error('Error when trying to send data', error)
			})
	}

	useEffect(() => {
		if (photo) {
			setThisPhoto(URL.createObjectURL(photo))
			console.log('1')
		} else if (photo_get) {
			setThisPhoto(photo_get)
			console.log('2')
		} else {
			setThisPhoto(WorkMan)
			console.log('3')
		}
	}, [photo, photo_get])

	return (
		<div className={s.mainDiv}>
			<h2 className={s.H2Settings}>Настройки профиля</h2>
			<div className={s.SettingsContainerMob}>
				<div>
					<form
						className={s.profileSettingsDiv}
						onSubmit={handleFormSubmit}
						action='submit'
					>
						<div
							style={{
								flexDirection: 'column',
								alignItems: 'flex-start',
								height: '100px',
							}}
							className={s.inputDiv}
						>
							<label htmlFor='email'>Электронная почта</label>
							<input
								className={s.inputStyles}
								type='email'
								placeholder='info@info.ru'
								id='email'
								value={email}
								onChange={handleEmailChange}
							/>
						</div>
						<button className={s.profileSettingsButton}>
							Сохранить
						</button>
					</form>
				</div>
				<div>
					<h2 className={s.contactInfo}>Контактная информация</h2>
				</div>
				<div>
					<div className={s.changePhotoDiv}>
						<div>
							<p>Фотография</p>
						</div>
						<input
							type='file'
							id='ProfilePhoto'
							style={{ display: 'none' }}
							onChange={handlePhotoUpload}
						/>

						<div className={s.photoContainer}>
							{/* <img
								className={s.ManPhotoImg}
								style={{ border: '1.2px solid blue' }}
								src={ThisPhoto}
								alt=''
							/> */}
							<div
								className={s.ManPhotoImg}
								style={{
									border: '1.2px solid blue',
									backgroundImage: `url(${ThisPhoto})`
								}}
							/>
							<label
								className={s.labelForPhoto}
								htmlFor='ProfilePhoto'
							>
								<div className={s.circleDiv}>
									<img src={editPan} alt='' />
								</div>
								<div>
									<p className={s.editText}>Редактировать</p>
								</div>
							</label>
						</div>
					</div>
					<div className={s.inputsDiv}>
						<div className={s.inputDivNameNCity}>
							<label htmlFor=''>Имя</label>
							<input
								type='text'
								placeholder='Иван Иванов'
								defaultValue={name}
								onChange={handleNameChange}
							/>
						</div>
						<div className={s.inputDivNameNCity}>
							<label htmlFor=''>Город</label>
							<RegionSelectTemplate
								styles={{ marginLeft: '0px', width: '70%' }}
								City={city}
								setCity={setCity}
								Citys={citys}
							/>
						</div>
						<button
							onClick={(e) => {
								handleFormSubmit(e)
							}}
							className={s.Button}
						>
							Сохранить
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
