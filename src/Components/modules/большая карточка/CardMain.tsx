import React from 'react'
import s from './cardMain.module.css'
import { CardAd, cardSummary } from '../../../interfaces/Interfaces'
import { NavLink } from 'react-router-dom'
import ShowNumberBtn from '../../ShowNumberBtn'
import { ParsedDescription } from '../../buildPages/cardinner/descriptionParser'
interface ICardMainProps {
	Cards: CardAd[]
	card_noads?: cardSummary[]
}
const CardMain: React.FC<ICardMainProps> = ({ Cards, card_noads }) => {
// 
	const shortenDescription = (text: string) => {
		if (text.length <= 200) {
			return text
		}
		return text.slice(0, 200) + '...'
	}
	const parsePrice = (price: string | number) => {
		const readyToParseString = price.toString().split('').filter((char) => char !== ' ').join('')
		return readyToParseString
			.split('')
			.reverse()
			.join('')
			.match(/.{1,3}/g)
			?.reverse()
			.map((el) => el.split('').reverse().join(''))
			.join(' ')
	}
	if (card_noads) {
		return card_noads.map((card) => (
			<div key={card.id_card} className={s.mainDiv}>
				<div className={s.leftDiv}>
					<img
						className={s.IMG}
						src={`${card.path_file[0]}`}
						alt=''
					/>
				</div>
				<div className={s.rightDiv}>
					<NavLink key={card.id_card} to={`/worker/${card.id_card}`}>
						<h2 className={s.H2Name}>{card.caption}</h2>
					</NavLink>
					<p className={s.Price}>
						{parsePrice(card.price)}
						<span>{card.price > 0 ? 'Р' : 'Цена не указана'}</span>
					</p>
					<p className={s.AboutHeader}>Описание:</p>
					<p className={s.AboutText}>{card.description}</p>
					<p className={s.Organization}>{card.username}</p>
					<ShowNumberBtn phone={card.phone} btnClass={s.PhoneNumberDiv} />
					<p className={s.City}>
						<span className={s.CitySpan}>
							{card.city ? 'Город: ' : ''}
						</span>
						{card.city}
					</p>
				</div>
			</div>
		))
	} else {
		return Cards.map((card) => (
			<div key={card.id_card} className={s.mainDiv}>
				<div className={s.leftDiv}>
					<img
						className={s.IMG}
						src={`${card.path_file[0]}`}
						alt=''
					/>
				</div>
				<div className={s.rightDiv}>
					<NavLink key={card.id_card} to={`/card/${card.id_card}`}>
						<h2 className={s.H2Name}>{card.caption}</h2>
					</NavLink>
					<p className={s.Price}>
						{parsePrice(card.price)}
						<span>{card.price.length > 0 ? 'Р' : 'Цена не указана'}</span>
					</p>
					<p className={s.AboutHeader}>Описание:</p>
					<ParsedDescription
						description={shortenDescription(card.description)}
						className={s.AboutText}
					/>

					<p className={s.Organization}>{card.username}</p>
					<ShowNumberBtn
						phone={card.phone}
						btnClass={s.PhoneNumberDiv}
					/>
					<p className={s.City}>
						<span className={s.CitySpan}>
							{card.city ? 'Город: ' : ''}
						</span>
						{card.city}
					</p>
				</div>
			</div>
		))
	}
}

export default CardMain
