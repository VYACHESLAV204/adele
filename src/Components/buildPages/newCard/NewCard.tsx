import React, { useEffect, useState } from 'react'
import greenMoney from '../../../assets/greenmoney.svg'
import st from '../summary/Summary.module.css'
import s from './NewCard.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Autocomplete, TextField } from '@mui/material'
interface categorys {
	data: {
		categorys: string
		sub_category: string[]
	}[]
}

const NewCard: React.FC = ({}) => {
	const [categoryState, setCategoryState] = useState<string>()
	const [categorysArray, setCategorysArray] = useState<categorys>()
	const [underCategoryState, setUnderCategoryState] = useState()
	const [titleState, setTitleState] = useState('')
	const [descriptionState, setDescriptionState] = useState('')
	const [priceState, setPriceState] = useState('')
	const [phoneState, setPhoneState] = useState('')
	const [tariffState, setTariffState] = useState('')
	const [photoStates, setPhotoStates] = useState<File[] | null>(null)
	useEffect(() => {
		fetch(`http://stoneworking.ru/api/v1/category-data`)
			.then((res) => res.json())
			.then((data) => setCategorysArray(data))
	}, [])

	const settings = {
		dots: true,
		vertical: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	useEffect(() => {
		console.log(categorysArray)
	}, [
		categorysArray,

		categoryState,
		underCategoryState,
		titleState,
		descriptionState,
		priceState,
		phoneState,
		tariffState,
		phoneState,
	])

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('category', categoryState || '')
		formData.append('subcategory', underCategoryState || '')
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
	const cat = categorysArray
	return (
		<div className={s.MainDiv}>
			<h2 className={s.H2Cat}>Категория</h2>

			<form onSubmit={submitForm}>
				<div className={s.SelectCatDiv}>
					<label htmlFor='Category'>
						Выберите категорию объявления:
					</label>
					<Autocomplete
						options={categorysArray || []}
						renderInput={(params) => (
							<TextField {...params} label='Category' />
						)}
						onChange={(e, newValue) =>
							setCategoryState(newValue || '')
						}
					/>
				</div>
				<div className={s.SelectCatDiv}>
					{/* <label htmlFor='underCategory'>
						Выберите подкатегорию обьявления:
					</label>
					<input
						type='text'
						id='underCategory'
						value={underCategory}
						placeholder={underCategory}
						onChange={(e) => setUnderCategoryState(e.target.value)}
					/> */}
				</div>
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
									? `Нажмите, чтобы добавить новую фотографию, уже ${photoStates?.length} загружено`
									: 'Нажмите или перетащите новую фотографию'}
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
									style={{
										position: 'relative',
										width: '280px',
										height: '140px',
										opacity: '0',
									}}
									onChange={(e) => {
										if (
											e.target.files instanceof FileList
										) {
											setPhotoStates(
												Array.from(e.target.files)
											)
										}
									}}
									className={st.photoInput}
									type='file'
								/>
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
