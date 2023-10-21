import { useEffect } from 'react'
import greenMoney from '../../../assets/greenmoney.svg'
import photoClose from '../../../assets/photoClose.svg'
import plus from '../../../assets/plus.svg'
import s from './NewCard.module.css'
interface InewCardProps {
	category: string
	underCategory: string
}
const NewCard: React.FC<InewCardProps> = ({ category, underCategory }) => {
	useEffect(() => {
		console.log(category)
		console.log(underCategory)
	}, [category,underCategory])

	return (
		<div className={s.MainDiv}>
			<h2 className={s.H2Cat}>Категория</h2>

			<form action=''>
				<div className={s.SelectCatDiv}>
					<label htmlFor='Category'>
						Выберите категорию объявления:
					</label>
					<input
						type='text'
						id='Category'
						value={category}
						placeholder={category}
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
					/>
				</div>
				<div className={s.setTitle}>
					<label htmlFor='title'>Заголовок объявления:</label>
					<input
						id='title'
						placeholder='Например: Обработка камня'
						type='text'
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
					></textarea>
				</div>
				<div>
					<h4 className={`${s.textLeft} ${s.titleTextStyle}`} >Фотографии</h4>
					<p style={{textAlign: 'left'}}>Не более 5 фото</p>
					<div className={s.photoSectionContainer}>
						<div className={`${s.photo} ${s.photoContainer}`}>
							<img className={s.photoClose} src={photoClose} alt="" />
						</div>
						<div className={s.addPhotoContainer}>
							<div className={s.plusContainer}>
							<p>Нажмите, чтобы добавить новую фотографию</p>
							<img className={s.plusPhoto} src={plus} alt="" />
							</div>
							<input className={s.photoInput}type="file" />
						</div>
					</div>
				</div>
				<div className={`${s.textLeft} ${s.textMargin}`}>
					<label className={s.labelProperty} htmlFor=''>Цена:</label>
					<div>
						<input className={s.inputPrice} type='text' placeholder='12 500' />
						<img className={s.marginLeft} src={greenMoney} alt='' />
					</div>
					<div>
						<p>Контактные данные в объявлении</p>
						<p>Телефон</p>
						<input className={s.inputPhone} type='number' placeholder='+7 123 456 78 90' />
					</div>
					<div>
						<h2 className={s.titleTextStyle}>Выбор тарифа оплаты объявления</h2>
						<div>
							<div className={s.priceSectionContainer}>	
								<div className={s.priceContainer}>
									<div className={s.priceTextContainer}>
										<h3 className={`${s.priceTitle} ${s.textRight}`}>Заголовок тарифа</h3>
										<p className={`${s.priceDescription} ${s.textRight}`} >Описание что входит в тариф</p>
										<p className={`${s.priceTag} ${s.textRight}`}>250Р</p>
									</div>
									<div className={s.priceElipse}></div>
								</div>
								<div className={s.priceContainer}>
									<div className={s.priceTextContainer}>
										<h3 className={`${s.priceTitle} ${s.textRight}`}>Заголовок тарифа</h3>
										<p className={`${s.priceDescription} ${s.textRight}`} >Описание что входит в тариф</p>
										<p className={`${s.priceTag} ${s.textRight}`}>250Р</p>
									</div>
									<div className={`${s.priceElipse} ${s.priceNotActive}`}></div>
								</div>
							</div>
								<div>
									<div className={s.flexRow}>
										<input className={s.checkbox} type='checkbox' required />
										<p>
											Я согласен с политикой обработки
											пресональных данных
										</p>
									</div>
							</div>
								<div className={s.flexRow}>
									<input className={s.checkbox} type='checkbox' required />
									<p>
										Подтверждаю согласие на обработку и
										размещение объявления
									</p>
								</div>
								<button className={`${s.btn} ${s.textMargin}`}>Разместить обьявление</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default NewCard
