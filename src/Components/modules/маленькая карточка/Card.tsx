import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { FC } from 'react'
import { CardAd } from '../../../interfaces/Interfaces'

const Card: FC<{
	cardsAd: CardAd[]
	inlineStyles?: Record<string, string>
	cardsStyles?: Record<string, string>
}> = ({ cardsAd = [], inlineStyles, cardsStyles }) => {
	return (
		<div style={cardsStyles}>
			{Array.isArray(cardsAd) &&
				cardsAd?.map((item) => (
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
									alt={item.description}
								/>
							</div>
							<div className={styles.CardInfoDiv}>
								<h3>{item.price}</h3>
								<p className={styles.CardInfoDivPrice}>
									{item.price}
								</p>
								<p>{item.city}</p>
							</div>
						</div>
					</Link>
				))}
		</div>
	)
}

export default Card
