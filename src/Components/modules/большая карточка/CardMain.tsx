import React, { useState } from 'react'
import s from './cardMain.module.css'
import { CardAd } from '../../../interfaces/Interfaces'
import { NavLink } from 'react-router-dom'
interface ICardMainProps {
	Cards: CardAd[]
}
const CardMain: React.FC<ICardMainProps> = ({ Cards }) => {
	const [showNumber, setShowNumber] = useState(false)
	return Cards.map((card) => (
		<div key={card.id_card} className={s.mainDiv}>
			<div className={s.leftDiv}>
				<img className={s.IMG} src={`${card.path_file[0]}`} alt='' />
			</div>
			<div className={s.rightDiv}>
				<NavLink key={card.id_card} to={`/card/${card.id_card}`}>
					<h2 className={s.H2Name}>{card.caption}</h2>
				</NavLink>
				<p className={s.Price}>
					{card.price}
					<span> Р</span>
				</p>
				<p className={s.AboutHeader}>Описание:</p>
				<p className={s.AboutText}>{card.description}</p>
				<p className={s.Organization}>{card.username}</p>
				<div
					onClick={() => setShowNumber(!showNumber)}
					className={s.PhoneNumberDiv}
				>
					{showNumber ? <p>{card.phone}</p> : <p>Показать телефон</p>}{' '}
				</div>
				<p className={s.City}>
					<span className={s.CitySpan}>Город: </span>
					{card.city}
				</p>
			</div>
		</div>
	))
}

export default CardMain
