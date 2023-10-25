import s from './Profile.module.css'
import WorkPhoto from '../../../assets/hardWorkingMan.svg'
import editPan from '../../../assets/editPan.svg'
import RegionSelectTemplate from '../../modules/select/SelectTemplate'
interface ProfileProps {
	citys: { label: string; value: string }[]
}
const Profile: React.FC<ProfileProps> = ({ citys }) => {
	const style={width:'40vw'}
	return (
		<div className={s.mainDiv}>
			<h2 className={s.H2Settings}>Настройки профиля</h2>
			<div>
				<form className={s.profileSettingsDiv} action='submit'>
					<div style={{flexDirection: 'column' , alignItems: 'flex-start' , height: '100px' }} className={s.inputDiv}>
						<label htmlFor='email'>Электронная почта</label>
						<input
							className={s.inputStyles}
							type='email'
							placeholder='info@info.ru'
							id='email'
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

					<div className={s.photoContainer}>
						<img className={s.ManPhotoImg} src={WorkPhoto} alt='' />
						<div className={s.circleDiv}>
							<img src={editPan} alt='' />
						</div>
						<div>
							<p className={s.editText}>Редактировать</p>
						</div>
					</div>
					{/* 
					<div>
						<p>Фотография</p>
					</div> */}
				</div>
				<div className={s.inputsDiv}>
					<div className={s.inputDivNameNCity}>
						<label htmlFor=''>Имя</label>
						<input type='text' placeholder='Иван Иванов' />
					</div>
					<div className={s.inputDivNameNCity}>
						<label htmlFor=''>Город</label>
						<RegionSelectTemplate style={style} citys={citys} />
						{/* Тут селект с запросом на бэк */}
					</div>
					<button className={s.Button}>Сохранить</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
