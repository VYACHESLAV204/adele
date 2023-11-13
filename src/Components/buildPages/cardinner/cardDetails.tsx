import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ParsedDescription } from './descriptionParser'
import s from './cardDetails.module.css'

import Slider from 'react-slick'
import { CardAd, CardAdResponse } from '../../../interfaces/Interfaces'
import ShowNumberBtn from '../../ShowNumberBtn'
const CardDetails: FC<CardAdResponse> = ({
	card_ads_1,
	card_ads_2,
	card_ads,
	card_noads,
	res,
	card_no_ads_1,
	card_no_ads_2,
}) => {
	const [This, setThis] = useState<CardAd | any>()
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
			card_no_ads_2.find((card) => card.id_card === numberId) ||
			res?.card_results.find((card) => card.id_card === numberId)
		if (foundCard) {
			setThis(foundCard)
		}
	}, [card_no_ads_2, numberId])
	useEffect(() => {
		console.log(This)
	}, [This])

	if (This) {
		return (
			<div className={s.mainDiv}>
				<div className={s.leftDiv}>
					<Slider adaptiveHeight {...settings}>
						{This.path_file.map((image: any, index: number) => (
							<div
								className={s.SliderStyle}
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
					{/* добавил разделение текста на абзацы */}
					<p className={s.aboutText}>
						{<ParsedDescription description={This.description} className=''/>}
					</p>
					<p className={s.organization}>{This.username}</p>
					<ShowNumberBtn
						phone={This.phone}
						btnClass={s.PhoneNumberDiv}
					/>
					{This.city && (
						<p className={s.City}>
							<span className={s.CitySpan}>{This.city ? 'Город: ' : ''}</span>
							{This.city}
						</p>
					)}
				</div>
			</div>
		)
	}
}

export default CardDetails
//Тут внутренняя страница обьявления
