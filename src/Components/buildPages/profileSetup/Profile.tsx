import React, { useEffect, useState } from 'react'
import s from './Profile.module.css'
import editPan from '../../../assets/editPan.svg'
import RegionSelectTemplate, { City } from '../../modules/select/SelectTemplate'
import WorkMan from '../../../assets/hardWorkingMan.svg'
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
					'Content-Type':
						'multipart/form-data; boundary=<calculated when request is sent>',
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
			.catch((error) => {
				console.error('Error when trying to send data', error)
			})
	}

	return (
		<div className={s.mainDiv}>
			<h2 className={s.H2Settings}>Настройки профиля</h2>
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
						<img
							className={s.ManPhotoImg}
							src={
								photo_get ||
								(photo ? URL.createObjectURL(photo) : WorkMan)
							}
							alt=''
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
							City={city}
							setCity={setCity}
							Citys={citys}
						/>
					</div>
					<button className={s.Button}>Сохранить</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
