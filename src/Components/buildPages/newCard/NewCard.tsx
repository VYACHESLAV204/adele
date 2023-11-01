import React, { useEffect, useState } from 'react'
import greenMoney from '../../../assets/greenmoney.svg'

import s from './NewCard.module.css'
import Reactdropzone from './photos'
import Slider from 'react-slick'

interface InewCardProps {
	category: string
	underCategory: string
}

const NewCard: React.FC<InewCardProps> = ({ category, underCategory }) => {
	const [categoryState, setCategoryState] = useState(category)
	const [underCategoryState, setUnderCategoryState] = useState(underCategory)
	const [titleState, setTitleState] = useState('')
	const [descriptionState, setDescriptionState] = useState('')
	const [priceState, setPriceState] = useState('')
	const [phoneState, setPhoneState] = useState('')
	const [tariffState, setTariffState] = useState('')

	// Assuming you have 5 photo inputs, if not, adjust as needed
	const [photoStates, setPhotoStates] = useState<File[]>()

	useEffect(() => {
		console.log(category)
		console.log(underCategory)
		console.log(
			categoryState,
			underCategoryState,
			titleState,
			descriptionState,
			priceState,
			phoneState,
			tariffState,
			phoneState
		)
	}, [
		category,
		underCategory,
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
		formData.append('category', category || '')
		formData.append('subcategory', underCategory || '')
		formData.append('caption', titleState || '')
		formData.append('description', descriptionState || '')
		formData.append('price', priceState || '')
		formData.append('phone', phoneState || '')
		formData.append('tariff', tariffState || '')
		formData.append('ads', 'False')
		{
			photoStates !== undefined &&
				photoStates.forEach((state, i) => {
					if (state) {
						formData.append(`photo${i + 1}`, state)
					}
				})
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

			<form onSubmit={submitForm}>
				<div className={s.SelectCatDiv}>
					<label htmlFor='Category'>
						Выберите категорию объявления:
					</label>
					<input
						type='text'
						id='Category'
						value={category}
						placeholder={category}
						onChange={(e) => setCategoryState(e.target.value)}
					/>
				</div>
				<div className={s.SelectCatDiv}>
					<label htmlFor='underCategory'>
						Выберите подкатегорию обьявления:
					</label>
					<input
						type='text'
						id='underCategory'
						value={underCategory}
						placeholder={underCategory}
						onChange={(e) => setUnderCategoryState(e.target.value)}
					/>
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
					<p style={{ textAlign: 'left' }}>Не более 5 фото</p>

					<label htmlFor='setPhoto'>
						<div className={s.photoSectionContainer}>
							<div className={`${s.photo} ${s.photoContainer}`}>
								<Slider images={photoStates}/>
							</div>
							<p style={{ marginTop: '2rem', width: '350px' }}>
								Перетащите свой фото сюда или нажмите и выберите
								их через файловую систему
							</p>
							<div className={s.addPhotoContainer}>
								<div className={s.plusContainer}>
									<Reactdropzone
										setPhotoStates={setPhotoStates}
									/>
								</div>
							</div>
							<p style={{ width: '350px' }}>
								Качественные фото с чистым фоном - залог высоких
								продаж
							</p>
						</div>
					</label>
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
						<p>Контактные данные в объявлении</p>
						<p>Телефон</p>
						<input
							className={s.inputPhone}
							type='tel'
							placeholder='+7 123 456 78 90'
							onChange={(e) => setPhoneState(e.target.value)}
						/>
					</div>
					<div>
						<h2 className={s.titleTextStyle}>
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
							<div className={s.flexRow}>
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
							<div className={s.flexRow}>
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
