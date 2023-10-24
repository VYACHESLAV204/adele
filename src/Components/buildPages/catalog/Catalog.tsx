import { ICatalogProps } from '../../../interfaces/Interfaces'
import { FC } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'
import Pagination from '../../modules/pagination/Pagination'
const Catalog: FC<ICatalogProps> = ({
	card_ads,
	card_noads,
	has_next_ads,
	has_next_noads,
	page,
	setPage,
	setSubCat,
	categorys_index,
	sub_category_all,
	total_pages_ads,
	total_pages_noads,
}) => {
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
	console.log(
		card_ads,
		card_noads,
		has_next_ads,
		has_next_noads,
		page,
		total_pages_ads,
		total_pages_noads
	)

	const styleClasses = [
		styles.OneCat,
		styles.TwoCat,
		styles.ThreeCat,
		styles.FourCat,
		styles.FiveCat,
		styles.SixCat,
		styles.SevenCat,
	]

	return (
		<div style={{}}>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<h2 className={styles.H2NameOfCategory}>{categorys_index}</h2>
				<div style={{ marginRight: 65 }}>
					<div className={styles.CatDiv}>
						{sub_category_all?.map((Cat, index) => {
							const styleClass =
								styleClasses[index % styleClasses.length]
							return (
								<div
									onClick={() => setSubCat(Cat.category)}
									key={Cat.id}
									className={styleClass}
								>
									<p className={styles.CatText}>
										{Cat.category}
									</p>
								</div>
							)
						})}
					</div>
					<div style={{ marginTop: 15 }}>
						<CardMain Cards={card_ads} />
					</div>
				</div>
				<div
					style={{ marginTop: -50 }}
					className={ColumnCardsStyles.AdCardsDiv}
				>
					<h2 className={ColumnCardsStyles.H2BestPractique}>
						Лучшие предложения:
					</h2>
					<Card cardsStyles={CardsStylesColumn} cardsAd={card_ads} />
				</div>

				<Pagination
					currentPage={page}
					setCurrentPage={setPage}
					totalPages={total_pages_ads}
				/>
			</div>
		</div>
	)
}

export default Catalog
