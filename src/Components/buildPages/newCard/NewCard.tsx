import React, { useEffect, useState } from 'react'
import greenMoney from '../../../assets/greenmoney.svg'
import st from '../summary/Summary.module.css'
import s from './NewCard.module.css'
import style from '../summary/Summary.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Autocomplete, TextField } from '@mui/material'
import './slider.css'
interface CatObject {
	catName: string
	newOld: boolean
}

interface Category {
	data: (string | CatObject)[]
}
const NewCard: React.FC = ({}) => {
	const [categoryState, setCategoryState] = useState<string>()
	const [categorysArray, setCategorysArray] = useState<Category | null>(null)
	const [subCategorysArray, setSubCategorysArray] = useState<Category | null>(
		null
	)
	const [newOld, setNewOld] = useState<string>('null')
	const [ShowNewOldButtons, setShowNewOldButtons] = useState(false)
	const [underCategoryState, setUnderCategoryState] = useState<string>()
	const [titleState, setTitleState] = useState('')
	const [descriptionState, setDescriptionState] = useState('')
	const [priceState, setPriceState] = useState('')
	const [phoneState, setPhoneState] = useState('')
	const [tariffState, setTariffState] = useState('')
	// const [photoStates, setPhotoStates] = useState<File[] | null>(null)
	const [photoStates, setPhotoStates] = useState<File[]>([])
	useEffect(() => {
		fetch(`http://stoneworking.ru/api/v1/category-data`)
			.then((res) => res.json())
			.then((data: Category) => setCategorysArray(data))
	}, [])

	useEffect(() => {
		if (categoryState) {
			fetch(`http://stoneworking.ru/api/v1/category-data`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					category: categoryState,
				}),
			})
				.then((res) => res.json())
				.then((data: Category) => setSubCategorysArray(data))
		}
	}, [categoryState])
	const settings = {
		dots: true,
		vertical: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		horizontal: true,
		nextArrow: (
			<div>
				<div className='next-slick-arrow'> ▶</div>
			</div>
		),
		prevArrow: (
			<div>
				<div className='prev-slick-arrow'>◀ </div>
			</div>
		),
	}

	console.log({ underCategoryState })

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('category', categoryState || '')
		formData.append('subcategory', underCategoryState || '')
		formData.append('new_old', newOld)
		formData.append('caption', titleState || '')
		formData.append('description', descriptionState || '')
		formData.append('price', priceState || '')
		formData.append('phone', phoneState || '')
		formData.append('tariff', tariffState || '')
		formData.append('ads', 'False')
		if (photoStates !== null) {
			for (let i = 0; i < photoStates.length; i++) {
				formData.append(`photo${i + 1}`, photoStates[i])
			}
		}

		const response = await fetch(
			`http://stoneworking.ru/api/v1/add-post?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				body: formData,
			}
		)

		const data = await response
			.json()
			.then(() =>
				alert('Ваше объявление успешно отправленно на модерацию')
			)
		console.log(data)
	}

	return (
		<div className={s.MainDiv}>
			<h2 className={s.H2Cat}>Категория</h2>

			<form className={s.inputForm} onSubmit={submitForm}>
				<div className={s.SelectCatDiv}>
					<label htmlFor='Category'>
						Выберите категорию объявления:
					</label>
					<Autocomplete
						options={categorysArray?.data || []}
						renderInput={(params) => (
							<TextField {...params} label='Выберите категорию' />
						)}
						sx={{ width: '250px', marginLeft: '1.2rem' }}
						onChange={(_, newValue) => {
							if (typeof newValue === 'string') {
								setCategoryState(newValue)
							} else if (newValue && 'catName' in newValue) {
								setCategoryState(newValue.catName)
							} else {
								setCategoryState('')
							}
						}}
					/>
				</div>
				<div
					// style={{ marginBottom: '2rem' }}
					className={s.SelectCatDiv}
				>
					<label htmlFor='underCategory'>
						Выберите подкатегорию обьявления:
					</label>
					{subCategorysArray && (
						<Autocomplete
							options={subCategorysArray?.data || []}
							isOptionEqualToValue={(
								option: string | CatObject,
								value: string | CatObject
							) =>
								(typeof option === 'string'
									? option
									: option.catName) ===
								(typeof value === 'string'
									? value
									: value.catName)
							}
							getOptionLabel={(option: string | CatObject) =>
								typeof option === 'string'
									? option
									: option.catName
							}
							renderOption={(
								props,
								option: string | CatObject
							) => {
								if (typeof option === 'string') {
									return <li {...props}>{option}</li>
								} else if (typeof option === 'object') {
									return <li {...props}>{option.catName}</li>
								}
							}}
							value={underCategoryState}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Выберите подкатегорию'
								/>
							)}
							sx={{ width: '250px', marginLeft: '1.2rem' }}
							onChange={(
								_,
								newValue: string | CatObject | null
							) => {
								if (typeof newValue === 'string') {
									setShowNewOldButtons(false)
									setUnderCategoryState(newValue)
								} else if (
									typeof newValue === 'object' &&
									newValue !== null
								) {
									setShowNewOldButtons(true)
									setUnderCategoryState(newValue.catName)
								}
							}}
						/>
					)}
				</div>
				{ShowNewOldButtons && (
					<div
						style={{ marginTop: '1.4rem', marginBottom: '2rem' }}
						className={style.genderContainer}
					>
						<p className={style.marginRight}>Состояние</p>
						<div
							className={
								newOld === 'true'
									? style.genderBtn
									: `${style.genderBtn} ${style.genderUnactive}`
							}
							onClick={() => setNewOld('true')}
						>
							Новое
						</div>

						<div
							className={
								newOld === 'false'
									? style.genderBtn
									: `${style.genderBtn} ${style.genderUnactive}`
							}
							onClick={() => setNewOld('false')}
						>
							Б/У
						</div>
					</div>
				)}
				<div className={s.setTitle}>
					<label htmlFor='title'>Заголовок объявления:</label>
					<input
						id='title'
						placeholder='Например: Обработка камня'
						type='text'
						onChange={(e) => setTitleState(e.target.value)}
					/>
				</div>
				<div className={s.description}>
					<label htmlFor='description'>Описание объявления</label>
					<textarea
						name='description'
						id='description'
						cols={30}
						rows={10}
						style={{ resize: 'none' }}
						placeholder='Расскажите здесь более подробно о вашем объявлении'
						onChange={(e) => setDescriptionState(e.target.value)}
					></textarea>
				</div>
				<div>
					<h4 className={`${s.textLeft} ${s.titleTextStyle}`}>
						Фотографии
					</h4>
					<p className={s.marginMob} style={{ textAlign: 'left' }}>
						Не более 5 фото
					</p>

					<div className={s.photoSectionContainer}>
						<div
							style={{ marginRight: '20px', width: '180px' }}
							className={`${st.photo} ${st.photoContainer}`}
						>
							<Slider adaptiveHeight {...settings}>
								{photoStates?.map((image, index) => (
									<div
										onDragOver={(e) => e.preventDefault()}
										style={{
											height: '179px',
											width: '180px',
										}}
										key={index}
									>
										<img
											onDragOver={(e) =>
												e.preventDefault()
											}
											style={{
												height: '179px',
												width: '180px',
												objectFit: 'cover',
												borderRadius: '8px',
											}}
											src={URL.createObjectURL(image)}
											alt={`Slide ${index}`}
										/>
									</div>
								))}
							</Slider>
						</div>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
							}}
						>
							<p
								onDragOver={(e) => {
									e.preventDefault()
								}}
								style={{
									textAlign: 'center',
									marginTop: '1rem',
									width: '300px',
								}}
							>
								{photoStates?.length
									? `Нажмите или перетащите новую фотографию в окно ниже, уже ${
											photoStates.length
									  } ${
											photoStates.length === 1
												? 'загружена'
												: 'загружено'
									  }`
									: 'Нажмите или перетащите новую фотографию в окно ниже:'}
							</p>
							<div
								onDragOver={(e) => {
									e.preventDefault()
								}}
								className={s.addPhotoContainer}
							>
								<input
									multiple
									id='photoInput1'
									onDragOver={(e) => {
										e.preventDefault()
									}}
									onChange={(e) => {
										if (
											e.target.files instanceof FileList
										) {
											setPhotoStates([
												...Array.from(e.target.files),
												...photoStates,
											])
										}
									}}
									className={s.inputFileContainer}
									type='file'
								/>
								{/* <img
									src={Plus}
									className={s.inputPlusImg}
									alt=''
								/> */}
							</div>
							<p style={{ textAlign: 'center', width: '300px' }}>
								Качественные фото с чистым фоном - залог высоких
								продаж
							</p>
						</div>
					</div>
				</div>
				<div className={`${s.textLeft} ${s.textMargin}`}>
					<label className={s.labelProperty} htmlFor=''>
						Цена:
					</label>
					<div>
						<input
							className={s.inputPrice}
							type='number'
							placeholder='12 500'
							onChange={(e) => setPriceState(e.target.value)}
						/>
						<img className={s.marginLeft} src={greenMoney} alt='' />
					</div>
					<div>
						<p
							className={`${s.textLeft} ${s.titleTextStyle} ${s.phoneText}`}
						>
							Контактные данные в объявлении
						</p>
						<p className={s.phoneText}>Телефон</p>
						<input
							className={s.inputPhone}
							type='tel'
							placeholder='+7 123 456 78 90'
							onChange={(e) => setPhoneState(e.target.value)}
						/>
					</div>
					<div>
						<h2
							className={`${s.textLeft} ${s.titleTextStyle} ${s.phoneText}`}
						>
							Выбор тарифа оплаты объявления
						</h2>
						<div>
							<div className={s.priceSectionContainer}>
								<div
									onClick={() => setTariffState('0')}
									className={s.priceContainer}
								>
									<div className={s.priceTextContainer}>
										<h3
											className={`${s.priceTitle} ${s.textRight}`}
										>
											Заголовок тарифа
										</h3>
										<p
											className={`${s.priceDescription} ${s.textRight}`}
										>
											Описание что входит в тариф
										</p>
										<p
											className={`${s.priceTag} ${s.textRight}`}
										>
											250Р
										</p>
									</div>
									<div
										className={
											tariffState === '0'
												? `${s.priceElipse}`
												: `${s.priceElipse} ${s.priceNotActive}`
										}
									></div>
								</div>
								<div
									onClick={() => setTariffState('1')}
									className={s.priceContainer}
								>
									<div className={s.priceTextContainer}>
										<h3
											className={`${s.priceTitle} ${s.textRight}`}
										>
											Заголовок тарифа
										</h3>
										<p
											className={`${s.priceDescription} ${s.textRight}`}
										>
											Описание что входит в тариф
										</p>
										<p
											className={`${s.priceTag} ${s.textRight}`}
										>
											250Р
										</p>
									</div>
									<div
										className={
											tariffState === '1'
												? `${s.priceElipse}`
												: `${s.priceElipse} ${s.priceNotActive}`
										}
									></div>
								</div>
							</div>
							<div className={`${s.flexRow} ${s.margBot}`}>
								<input
									className={s.checkbox}
									type='checkbox'
									required
								/>
								<p>
									Я согласен с политикой обработки
									персональных данных
								</p>
							</div>
							<div className={`${s.flexRow} ${s.margBot}`}>
								<input
									className={s.checkbox}
									type='checkbox'
									required
								/>
								<p>
									Подтверждаю согласие на обработку и
									размещение объявления
								</p>
							</div>

							<button
								type='submit'
								className={`${s.btn} ${s.textMargin}`}
							>
								Разместить объявление
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default NewCard
