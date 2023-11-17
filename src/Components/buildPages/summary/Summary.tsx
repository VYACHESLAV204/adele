import { useState, useEffect } from 'react'
import s from './Summary.module.css'
import addNew from '../../../assets/addNew.svg'
import greenMoney from '../../../assets/greenmoney.svg'
import 'react-widgets/styles.css'
import DateInput from '../../modules/dateInput/DateInput'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export type SummaryFieldsType = {
	category: string
	subcategory: string
	info_job: string
	job: string
	graphic_job: string
	status_search: string
	job_next_day: boolean
	years_exp: string
	gender: string
	data_birthday: string
	ready_togouthome: string
	togouthome: string
	contry_people: string
	type_work: string
	about_me: string
	cant_dollars: string
	photos: File[] | null
}

const Summary = () => {
	const [TotalH, setH] = useState<string>('653vh')
	const [summaryFields, setSummaryFields] = useState<SummaryFieldsType>({
		category: 'Работа',
		subcategory: 'Ищу сотрудника',
		info_job: '',
		job: '',
		graphic_job: '2/2',
		status_search: '',
		job_next_day: false,
		years_exp: '',
		gender: 'Мужской',
		data_birthday: '',
		ready_togouthome: 'Готов',
		togouthome: 'Возможен',
		contry_people: '',
		type_work: '',
		about_me: '',
		cant_dollars: '',
		photos: null,
	})
	const settings = {
		dots: true,
		vertical: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	function updateHeight(howmuch: number) {
		const thisH = parseInt(TotalH)
		const total = thisH + howmuch
		console.log(total)

		setH(`${total}vh`)
	}

	const [educationFields, setEducationFields] = useState([
		{
			years_start_univer: '',
			years_stop_univer: '',
			name_universitet: '',
			universitet_why_jobs: '',
		},
	])
	const [languageFields, setLanguageFields] = useState([
		{
			language: '',
			level_language: '',
		},
	])
	const [workExp, setWorkExp] = useState([
		{
			description_jobs: '',
			name_company: '',
			why_jobs: '',
			start_work_time: '',
			stop_work_time: '',
			every_time: false,
		},
	])
	const currentYear = new Date().getFullYear()
	const years = Array.from(
		{ length: currentYear + 21 - 1940 },
		(_, i) => currentYear + 10 - i
	)

	const updateWorkExpFields = (
		index: number,
		key: keyof (typeof workExp)[0],
		value: string | boolean
	) => {
		setWorkExp((prevState) => {
			const newArray = [...prevState]
			newArray[index] = { ...newArray[index], [key]: value }
			return newArray
		})
	}

	const updateEducationFields = (
		index: number,
		key: keyof (typeof educationFields)[0],
		value: string
	) => {
		setEducationFields((prevState) => {
			const newArray = [...prevState]
			newArray[index] = { ...newArray[index], [key]: value }
			return newArray
		})
	}

	const updateLanguageFields = (
		index: number,
		key: keyof (typeof languageFields)[0],
		value: string
	) => {
		setLanguageFields((prevState) => {
			const newArray = [...prevState]
			newArray[index] = { ...newArray[index], [key]: value }
			return newArray
		})
	}

	useEffect(() => {
		console.log(workExp, languageFields, educationFields)
	}, [workExp, languageFields, educationFields])

	const updateSummaryFields = (
		key: keyof SummaryFieldsType,
		value: string | boolean | File[]
	) => {
		setSummaryFields((prevState) => ({
			...prevState,
			[key]: value,
		}))
	}

	useEffect(() => {
		console.log(summaryFields)
	}, [summaryFields])

	const sendFormData = () => {
		const summaryToServer = new FormData()
		summaryToServer.append('category', summaryFields.category)
		summaryToServer.append('subcategory', summaryFields.subcategory)
		summaryToServer.append('info_job', summaryFields.info_job)
		summaryToServer.append('job', summaryFields.job)
		summaryToServer.append('graphic_job', summaryFields.graphic_job)
		summaryToServer.append('status_search', summaryFields.status_search)
		summaryToServer.append(
			'job_next_day',
			String(summaryFields.job_next_day)
		)
		summaryToServer.append('years_exp', summaryFields.years_exp)
		summaryToServer.append('gender', summaryFields.gender)
		summaryToServer.append('data_birthday', summaryFields.data_birthday)
		summaryToServer.append(
			'ready_togouthome',
			summaryFields.ready_togouthome
		)
		summaryToServer.append('togouthome', summaryFields.togouthome)
		summaryToServer.append('contry_people', summaryFields.contry_people)
		summaryToServer.append('type_work', summaryFields.type_work)
		summaryToServer.append('about_me', summaryFields.about_me)
		summaryToServer.append('cant_dollars', summaryFields.cant_dollars)

		if (summaryFields.photos !== null) {
			for (let i = 0; i < summaryFields.photos.length; i++) {
				summaryToServer.append(
					`photos${i + 1}`,
					summaryFields.photos[i]
				)
			}
		}

		fetch(
			`http://stoneworking.ru/api/v1/add-summary?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				body: summaryToServer,
			}
		)
			.then((data) => data.json())
			.then((data) => {
				const toServerJson = {
					profile_id: data.id_user,
					workExp: workExp,
					educationFields: educationFields,
					languageFields: languageFields,
				}

				return fetch(
					`http://stoneworking.ru/api/v1/add-summary-next?jwt=${localStorage.getItem(
						'token'
					)}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						mode: 'cors',
						body: JSON.stringify(toServerJson),
					}
				)
			})
	}
	return (
		<div
			onDragOver={(e) => e.preventDefault()}
			// style={{ height: TotalH }}
			className={s.summaryContainer}
		>
			<h1 className={s.MainTitle}>Резюме</h1>
			<div className={s.categoryContainer}>
				<p className={s.categoryTitle}>Категория:</p>
				<p className={s.categoryText}>Работа/резюме</p>
			</div>
			<h2 className={s.pageTitle}>Подробности</h2>
			<div className={s.workCategory}>
				<p className={s.marginRight}>Кем вы хотите работать?</p>
				<input
					className={`${s.input} ${s.inputWork}`}
					type='text'
					value={summaryFields.info_job}
					placeholder='Каменщик'
					onChange={(e) =>
						updateSummaryFields('info_job', e.target.value)
					}
				/>
			</div>
			<h2 className={s.pageTitle}>Параметры</h2>
			<div className={s.workCategory}>
				<p style={{ marginBottom: '2rem' }} className={s.marginRight}>
					Профессия
				</p>
				<div className={s.inputContainer}>
					<input
						className={`${s.input} ${s.inputWork}`}
						type='text'
						value={summaryFields.job}
						placeholder='Каменщик'
						onChange={(e) =>
							updateSummaryFields('job', e.target.value)
						}
					/>
					<p className={s.inputAbout}>
						Поможет нам сделать поиск точнее, работадатели этого не
						увидят
					</p>
				</div>
			</div>
			<div className={s.workCategory}>
				<p className={s.marginRight}>График работы</p>
				<select
					className={`${s.input} ${s.inputWork}`}
					value={summaryFields.graphic_job}
					onChange={(e) =>
						updateSummaryFields('graphic_job', e.target.value)
					}
				>
					<option value='2/2'>2/2</option>
					<option value='3/3'>3/3</option>
					<option value='5/2'>5/2</option>
					<option value='6/1'>6/1</option>
				</select>
			</div>
			<div className={s.workCategory}>
				<p className={s.marginRight}>Статус поиска</p>
				<select
					className={`${s.input} ${s.inputWork}`}
					value={summaryFields.status_search}
					onChange={(e) =>
						updateSummaryFields('status_search', e.target.value)
					}
				>
					<option value='Ищу работу'>Ищу работу</option>
					<option value='Открыт к предложениям'>
						Открыт к предложениям
					</option>
					<option value='Не ищу работу'>Не ищу работу</option>
				</select>
			</div>
			<div className={s.checkboxContainer}>
				<input
					onChange={() =>
						updateSummaryFields(
							'job_next_day',
							!summaryFields.job_next_day
						)
					}
					className={s.checkboxItem}
					type='checkbox'
				/>
				<p className={s.checkboxText}>Могу выйти завтра</p>
			</div>
			<div className={s.workCategory}>
				<p className={s.marginRight}>Стаж работы</p>
				<select
					className={`${s.input} ${s.inputWork}`}
					value={summaryFields.years_exp}
					onChange={(e) =>
						updateSummaryFields('years_exp', e.target.value)
					}
				>
					<option value='Нет опыта'>Нет опыта</option>
					<option value='	Менее 3-х лет'>Менее 3-х лет</option>
					<option value='Более 3-х лет'>Более 3-х лет</option>
				</select>
			</div>
			<div className={s.genderContainer}>
				<p className={s.marginRight}>Пол</p>
				<div className={s.genderBtnsContainer}>
					<button
						className={
							summaryFields.gender === 'Мужской'
								? s.genderBtn
								: `${s.genderBtn} ${s.genderUnactive}`
						}
						onClick={() => updateSummaryFields('gender', 'Мужской')}
					>
						Мужской
					</button>

					<button
						className={
							summaryFields.gender === 'Женский'
								? s.genderBtn
								: `${s.genderBtn} ${s.genderUnactive}`
						}
						onClick={() => updateSummaryFields('gender', 'Женский')}
					>
						Женский
					</button>
				</div>
			</div>
			<div className={s.dateNewborn}>
				<p className={s.marginRight}>Дата рождения</p>
				<DateInput updateSummary={updateSummaryFields} />
			</div>
			<div className={s.genderContainer}>
				<p className={s.marginRight}>Готовность к командировкам</p>
				<button
					onClick={() =>
						updateSummaryFields('ready_togouthome', 'Готов')
					}
					className={`${s.genderBtn} ${
						summaryFields.ready_togouthome !== 'Готов'
							? s.genderUnactive
							: ''
					}`}
				>
					Готов
				</button>
				<button
					onClick={() =>
						updateSummaryFields('ready_togouthome', 'Иногда')
					}
					className={`${s.genderBtn} ${
						summaryFields.ready_togouthome !== 'Иногда'
							? s.genderUnactive
							: ''
					}`}
				>
					Иногда
				</button>
				<button
					onClick={() =>
						updateSummaryFields('ready_togouthome', 'Не готов')
					}
					className={`${s.genderBtn} ${
						summaryFields.ready_togouthome !== 'Не готов'
							? s.genderUnactive
							: ''
					}`}
				>
					Не готов
				</button>
			</div>
			<div className={s.genderContainer}>
				<p className={s.marginRight}>Переезд</p>
				<button
					onClick={() =>
						updateSummaryFields('togouthome', 'Возможен')
					}
					className={`${s.genderBtn} ${
						summaryFields.togouthome !== 'Возможен'
							? s.genderUnactive
							: ''
					}`}
				>
					Возможен
				</button>
				<button
					onClick={() =>
						updateSummaryFields('togouthome', 'Не возможен')
					}
					className={`${s.genderBtn} ${
						summaryFields.togouthome !== 'Не возможен'
							? s.genderUnactive
							: ''
					}`}
				>
					Не возможен
				</button>
			</div>
			<div className={s.workCategory}>
				<p className={s.marginRight}>Гражданство</p>
				<input
					className={`${s.input} ${s.inputWork}`}
					value={summaryFields.contry_people}
					onChange={(e) =>
						updateSummaryFields('contry_people', e.target.value)
					}
				></input>
			</div>
			<div className={s.workingType}>
				<p className={s.marginRight}>Тип занятости</p>
				<div className={s.checkboxContainer2}>
					<div className={s.checkboxBox}>
						<input
							onClick={() =>
								updateSummaryFields(
									'type_work',
									'Частичная занятость'
								)
							}
							className={s.checkboxItem}
							type='checkbox'
						/>
						<p className={s.checkboxText}>Частичная занятость</p>
					</div>
					<div className={s.checkboxBox}>
						<input
							onClick={() =>
								updateSummaryFields(
									'type_work',
									'Полная занятость'
								)
							}
							className={s.checkboxItem}
							type='checkbox'
						/>
						<p className={s.checkboxText}>Полная занятость</p>
					</div>
				</div>
			</div>
			<h2 className={s.pageTitle}>
				Укажите дополнительные параметры и опции
			</h2>
			{workExp.map((_, index) => {
				return (
					<div className={`${s.aboutContainer} ${s.about}`}>
						<div className={s.workCategory}>
							<p className={s.marginRight}>Название компании</p>
							<input
								className={`${s.input} ${s.inputWork}`}
								type='text'
								value={workExp[index].name_company}
								onChange={(e) =>
									updateWorkExpFields(
										index,
										'name_company',
										e.target.value
									)
								} // Используйте соответствующее свойство для каждого input
							/>
						</div>
						<div className={s.workCategory}>
							<p className={s.marginRight}>Должность</p>
							<input
								className={`${s.input} ${s.inputWork}`}
								type='text'
								value={workExp[index].why_jobs}
								onChange={(e) =>
									updateWorkExpFields(
										index,
										'why_jobs',
										e.target.value
									)
								}
							/>
						</div>
						<div className={s.dateNewborn}>
							<div>
								<p className={s.marginRight}>Начало работы</p>
								<input
									className={`${s.input} ${s.inputNewborn}`}
									type='text'
									value={workExp[index].start_work_time}
									onChange={(e) =>
										updateWorkExpFields(
											index,
											'start_work_time',
											e.target.value
										)
									}
								/>
							</div>
							<div className={s.endJob}>
								<p className={s.marginRight}>Окончание работы</p>
								<input
									className={`${s.input} ${s.inputNewborn2}`}
									type='text'
									value={workExp[index].stop_work_time}
									onChange={(e) =>
										updateWorkExpFields(
											index,
											'stop_work_time',
											e.target.value
										)
									} // Используйте соответствующее свойство для каждого input
								/>
								<div className={s.checkboxBox}>
									<input
										className={s.checkboxItem}
										type='checkbox'
										checked={workExp[index].every_time}
										onChange={(e) =>
											updateWorkExpFields(
												index,
												'every_time',
												e.target.checked
											)
										}
										// Используйте соответствующее свойство для каждого input
									/>
									<p className={s.checkboxText}>
										По настоящее время
									</p>
								</div>
							</div>
							
						</div>
						<div className={s.aboutDesc}>
							<p className={s.marginRight}>Описание работы</p>
							<input
								className={`${s.input} ${s.inputDesc}`}
								type='text'
								value={workExp[index].description_jobs}
								onChange={(e) =>
									updateWorkExpFields(
										index,
										'description_jobs',
										e.target.value
									)
								}
							/>
						</div>
					</div>
				)
			})}
			<button
				className={s.addBtn}
				style={{ border: '0px', backgroundColor: '#fff' }}
				onClick={() => {
					setWorkExp((prevWorkExp) => [
						...prevWorkExp,
						{
							name_company: '',
							why_jobs: '',
							start_work_time: '',
							stop_work_time: '',
							every_time: false,
							description_jobs: '',
						},
					]),
						updateHeight(100)
				}}
			>
				<img className={s.addNew} src={addNew} alt='' />
				<p className={`${s.marginRight} ${s.addText}`}>
					Добавить ещё одну работу
				</p>
			</button>
			<h2 className={`${s.pageTitle} ${s.marginTop}`}>
				Учебные заведения
			</h2>
			{educationFields.map((_, index) => {
				return (
					<div className={`${s.aboutContainer} ${s.aboutStudy}`}>
						<div className={s.workCategory}>
							<p
								style={{ marginBottom: '2rem' }}
								className={s.marginRight}
							>
								Название заведения
							</p>
							<div className={s.inputContainer}>
								<input
									className={`${s.input} ${s.inputWork}`}
									type='text'
									placeholder='Название заведения'
									value={
										educationFields[index].name_universitet
									}
									onChange={(e) =>
										updateEducationFields(
											index,
											'name_universitet',
											e.target.value
										)
									}
								/>
								<p className={s.inputAbout}>Например, СПБГУ</p>
							</div>
						</div>
						<div className={s.workCategory}>
							<p
								style={{ marginBottom: '2rem' }}
								className={s.marginRight}
							>
								Ваша профессия
							</p>
							<div className={s.inputContainer}>
								<input
									className={`${s.input} ${s.inputWork}`}
									type='text'
									placeholder='Ваша профессия'
									value={
										educationFields[index]
											.universitet_why_jobs
									}
									onChange={(e) =>
										updateEducationFields(
											index,
											'universitet_why_jobs',
											e.target.value
										)
									}
								/>
								<p className={s.inputAbout}>
									Например “Оператор станка”
								</p>
							</div>
						</div>
						<div className={s.workCategory}>
							<p className={s.marginRight}>Год поступления</p>
							<div className={s.inputContainer}>
								<div>
									<select
										className={`${s.input} ${s.inputNewborn}`}
										value={
											educationFields[index]
												.years_start_univer
										}
										onChange={(e) =>
											updateEducationFields(
												index,
												'years_start_univer',
												e.target.value
											)
										}
									>
										{years.filter((y) => y <= currentYear).map((year, index) => (
											<option key={index} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className={s.workCategory}>
							<p
								style={{ marginBottom: '2rem' }}
								className={s.marginRight}
							>
								Год окончания
							</p>
							<div className={s.inputContainer}>
								<div>
									<select
										className={`${s.input} ${s.inputNewborn}`}
										value={
											educationFields[index]
												.years_stop_univer
										}
										onChange={(e) =>
											updateEducationFields(
												index,
												'years_stop_univer',
												e.target.value
											)
										}
									>
										{years.map((year, index) => (
											<option key={index} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
								<p className={s.inputAbout}>
									Если вы ещё учитесь - год предполагаемого
									окончания
								</p>
							</div>
						</div>
					</div>
				)
			})}
			<button
				className={s.addBtn}
				style={{ border: '0px', backgroundColor: '#fff' }}
				onClick={() => {
					setEducationFields((prevEducationFields) => [
						...prevEducationFields,
						{
							years_stop_univer: '',
							name_universitet: '',
							universitet_why_jobs: '',
							years_start_univer: '',
						},
					])
					updateHeight(65)
				}}
			>
				<img className={s.addNew} src={addNew} alt='' />
				<p className={`${s.marginRight} ${s.addText}`}>
					Добавить ещё одно место обучение
				</p>
			</button>
			<h2 className={`${s.pageTitle} ${s.marginTop}`}>Знания языков</h2>
			{languageFields.map((_, index) => {
				return (
					<div className={`${s.aboutLang} ${s.langContainer}`}>
						<div className={s.workCategory}>
							<p className={s.marginRight}>Название языка</p>
							<div className={s.inputContainer}>
								<input
									className={`${s.input} ${s.inputWork}`}
									type='text'
									placeholder='Английский'
									value={languageFields[index].language}
									onChange={(e) =>
										updateLanguageFields(
											index,
											'language',
											e.target.value
										)
									}
								/>
							</div>
						</div>

						<div className={s.inputBox}>
							<p className={s.marginRight}>Уровень владения</p>
							<select
								className={`${s.input} ${s.inputDate}`}
								placeholder=''
								value={languageFields[index].level_language}
								onChange={(e) =>
									updateLanguageFields(
										index,
										'level_language',
										e.target.value
									)
								}
							>
								<option value='A1'>A1</option>
								<option value='A2'>A2</option>
								<option value='B1'>B1</option>
								<option value='B2'>B2</option>
								<option value='C1'>C1</option>
								<option value='C2'>C2</option>
							</select>
						</div>
					</div>
				)
			})}
			<button
				className={s.addBtn}
				style={{ border: '0px', backgroundColor: '#fff' }}
				onClick={() => {
					setLanguageFields((prevEducationFields) => [
						...prevEducationFields,
						{
							language: '',
							level_language: '',
						},
					]),
						updateHeight(40)
				}}
			>
				<img className={s.addNew} src={addNew} alt='' />
				<p className={`${s.marginRight} ${s.addText}`}>
					Добавить знание языка
				</p>
			</button>
			<div className={s.aboutDesc}>
				<p className={`${s.marginRight} ${s.textAbout}`}>О себе</p>
				<input
					value={summaryFields.about_me}
					onChange={(e) =>
						updateSummaryFields('about_me', e.target.value)
					}
					className={`${s.input} ${s.inputDesc}`}
					type='text'
				/>
			</div>
			<div>
				<label className={s.marginRight} htmlFor=''>
					Зарплата:
				</label>
				<input
					className={s.inputPrice}
					type='number'
					value={summaryFields.cant_dollars}
					placeholder='40 000'
					onChange={(e) =>
						updateSummaryFields('cant_dollars', e.target.value)
					}
				/>
				<img className={s.marginLeft} src={greenMoney} alt='' />
			</div>
			<div>
				<h4 className={s.titleTextStyle}>Фотографии</h4>
				<p style={{ textAlign: 'left', marginBottom: '1rem' }}>
					Не более 5 фото
				</p>
				<div
					onDragOver={(e) => e.preventDefault()}
					className={s.photoSectionContainer}
				>
					<div
						onDragOver={(e) => e.preventDefault()}
						className={`${s.photo} ${s.photoContainer}`}
					>
						{summaryFields.photos !== null && (
							<Slider adaptiveHeight {...settings}>
								{summaryFields.photos.map((image, index) => (
									<div
										onDragOver={(e) => e.preventDefault()}
										style={{
											height: '179px',
											width: '229px',
										}}
										key={index}
									>
										<img
											onDragOver={(e) =>
												e.preventDefault()
											}
											style={{
												height: '179px',
												width: '229px',
												objectFit: 'cover',
												borderRadius: '8px',
											}}
											src={URL.createObjectURL(image)}
											alt={`Slide ${index}`}
										/>
									</div>
								))}
							</Slider>
						)}
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
						}}
					>
						<p
							onDragOver={(e) => {
								e.preventDefault()
							}}
							style={{
								textAlign: 'center',
								marginBottom: '1rem',
								width: '300px',
							}}
						>
							{summaryFields.photos?.length
								? `Нажмите или перетащите новую фотографию в окно ниже, уже ${summaryFields.photos?.length} загружено`
								: 'Нажмите или перетащите новую фотографию в окно ниже:'}
						</p>
						<div
							onDragOver={(e) => {
								e.preventDefault()
							}}
							className={s.addPhotoContainer}
						>
							<div
								onDragOver={(e) => {
									e.preventDefault()
								}}
								className={s.plusContainer}
							>
								<input
									multiple
									id='photoInput1'
									onDragOver={(e) => {
										e.preventDefault()
									}}
									style={{
										position: 'relative',
										width: '290px',
										height: '182px',
										opacity: '0',
									}}
									onChange={(e) => {
										if (
											e.target.files instanceof FileList
										) {
											updateSummaryFields(
												'photos',
												Array.from(e.target.files)
											)
										}
									}}
									className={s.photoInput}
									type='file'
								>
								</input>
							</div>
						</div>
						<p style={{ textAlign: 'center', width: '300px' }}>
							Качественные фото с чистым фоном - залог высоких
							продаж
						</p>
					</div>
				</div>
			</div>
			<button
				onClick={sendFormData}
				className={`${s.btn} ${s.textMargin}`}
			>
				Разместить объявление
			</button>
		</div>
	)
}

export default Summary
