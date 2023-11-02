import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './cardDetails.module.css'
import st from '../newCard/NewCard.module.css'
import Slider from 'react-slick'
import { CardAd, CardAdResponse } from '../../../interfaces/Interfaces'
const CardDetails: FC<CardAdResponse> = ({
	card_ads_1,
	card_ads_2,
	card_ads,
	card_noads,
	card_no_ads_1,
	card_no_ads_2,
}) => {
	const [This, setThis] = useState<CardAd>()
	const { id } = useParams<{ id: string }>() // Keep it as string
	const numberId = Number(id) // convert string id to numaric id
	const settings = {
		dots: true,
		vertical: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	useEffect(() => {
		console.log(numberId)

		const foundCard =
			card_noads?.find((card) => card.id_card === numberId) ||
			card_ads?.find((card) => card.id_card === numberId) ||
			card_ads_1.find((card) => card.id_card === numberId) ||
			card_ads_2.find((card) => card.id_card === numberId) ||
			card_no_ads_1.find((card) => card.id_card === numberId) ||
			card_no_ads_2.find((card) => card.id_card === numberId)
		if (foundCard) {
			setThis(foundCard)
		}
	}, [card_no_ads_2, numberId])
	useEffect(() => {
		console.log(This)
	}, [This])

	const [showNumber, setShowNumber] = useState(false)
	if (This) {
		return (
			<div className={s.mainDiv}>
				<div className={s.leftDiv}>
					<Slider adaptiveHeight {...settings}>
						{This.path_file.map((image, index) => (
							<div className={s.SliderStyle}
								style={{
									borderRadius: '15px',
									width: '491px',
									height: '453px',
								}}
								key={index}
							>
								<img
									className={s.SliderImg}
									src={image}
									alt={`Slide ${index}`}
									style={{
										height: '420px',
										width: '491px',
										borderRadius: '15px',
									}}
								/>
							</div>
						))}
					</Slider>
				</div>
				<div className={s.rightDiv}>
					<h2 className={s.H2Name}>{This.caption}</h2>
					<div className={s.priceBox}>
						<p className={s.price}>{This.price}</p>
					</div>
					<p className={s.aboutHeader}>Описание:</p>
					<p className={s.aboutText}>{This.description}</p>
					<p className={s.organization}>{This.username}</p>
					<div
						onClick={() => setShowNumber(!showNumber)}
						className={s.PhoneNumberDiv}
					>
						{showNumber ? (
							<p>{This.phone}</p>
						) : (
							<p>Показать телефон</p>
						)}{' '}
					</div>
					<p className={s.City}>
						<span className={s.CitySpan}>Город:</span>
						{This.city}
					</p>
				</div>
			</div>
		)
	}
}

export default CardDetails
//Тут внутренняя страница обьявления
