import React, { useEffect, useState } from 'react'
import s from './Profile.module.css'
import editPan from '../../../assets/editPan.svg'
import RegionSelectTemplate, {
	OptionType,
} from '../../modules/select/SelectTemplate'

interface ProfileProps {
	citys: { label: string; value: string }[]
}

const Profile: React.FC<ProfileProps> = ({ citys }) => {
	const [profile, setProfile] = useState({})
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [city, setCity] = useState<OptionType | undefined>({
		label: '',
		value: '',
	})
	const [photo, setPhoto] = useState<File | null>(null)
	const [photo_get, setPhoto_get] = useState('')

	useEffect(() => {
		fetch(
			`http://31.129.105.19/api/v1/profile-settings?jwt=${localStorage.getItem(
				'token'
			)}`
		)
			.then((response) => response.json())
			.then((data) => {
				setProfile(data)
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
			`http://31.129.105.19/api/v1/profile-settings-post?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',

				headers: {
					'Content-Type':
						'multipart/form-data; boundary=<calculated when request is sent>',
					'Accept': '*/*',
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

	const style = { width: '500px', marginLeft: '0px' }
	return (
		<div className={s.mainDiv}>
			<h2 className={s.H2Settings}>Настройки профиля</h2>
			<div>
				<form
					className={s.profileSettingsDiv}
					action='submit'
					onSubmit={handleFormSubmit}
				>
					<div className={s.inputDiv}>
						<label htmlFor='email'>Электронная почта</label>
						<input
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
					<input type='file' onChange={handlePhotoUpload} />

					<div>
						<img className={s.ManPhotoImg} src={photo_get} alt='' />
						<div className={s.circleDiv}>
							<img src={editPan} alt='' />
						</div>
						<div>
							<p className={s.editText}>Редактировать</p>
						</div>
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
							style={style}
							City={city}
							setCity={setCity}
							citys={citys}
						/>
					</div>
					<button className={s.Button}>Сохранить</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
