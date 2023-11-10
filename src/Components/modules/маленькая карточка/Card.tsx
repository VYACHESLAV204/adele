import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { FC } from 'react'
import { CardAd, cardSummary } from '../../../interfaces/Interfaces'

const Card: FC<{
	cardsAd: CardAd[]
	card_noads?: cardSummary[]
	inlineStyles?: Record<string, string>
	cardsStyles?: Record<string, string>
}> = ({ cardsAd = [], inlineStyles, cardsStyles, card_noads }) => {
	return (
		<div className={styles.ML} style={cardsStyles}>
			{card_noads
				? Array.isArray(card_noads) &&
				  card_noads?.slice(0,4).map((item) => (
						<Link
							to={`/worker/${item.id_card}`}
							key={item.id_card}
							style={inlineStyles}
						>
							<div
								style={inlineStyles}
								className={styles.MainCardDiv}
							>
								<div className={styles.CardImgDiv}>
									<img
										className={styles.IMG}
										src={item.path_file[0]}
										alt={''}
									/>
								</div>
								<div className={styles.CardInfoDiv}>
									<h3>{item.caption}</h3>
									<p className={styles.CardInfoDivPrice}>
										{item.description}
									</p>
									<p>{`${item.price} Р`}</p>
								</div>
							</div>
						</Link>
				  ))
				: Array.isArray(cardsAd) &&
				  cardsAd?.slice(0,4).map((item) => (
						<Link
							to={`/card/${item.id_card}`}
							key={item.id_card}
							style={inlineStyles}
						>
							<div
								style={inlineStyles}
								className={styles.MainCardDiv}
							>
								<div className={styles.CardImgDiv}>
									<img
										className={styles.IMG}
										src={item.path_file[0]}
										alt={''}
									/>
								</div>
								<div className={styles.CardInfoDiv}>
									<h3>{item.caption}</h3>
									<p className={styles.CardInfoDivPrice}>
										{item.description}
									</p>
									<p>{`${item.price} Р`}</p>
								</div>
							</div>
						</Link>
				  ))}
		</div>
	)
}

export default Card
