import { ICatalogProps } from '../../../interfaces/Interfaces'
import { FC } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'
import Pagination from '../../modules/pagination/Pagination'
import { NavLink } from 'react-router-dom'
const Catalog: FC<ICatalogProps> = ({
	card_ads,
	card_noads,
	has_next_ads,
	has_next_noads,
	page,
	resume,
	setPage,
	setCat,
	setSubCat,
	categorys_index,
	sub_category_all,
	total_pages_ads,
	total_pages_noads,
}) => {
	const CardStylesMob = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		width: '91vw',
	}
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
	console.log(sub_category_all)

	const styleClasses = [
		styles.OneCat,
		styles.TwoCat,
		styles.ThreeCat,
		styles.FourCat,
		styles.FiveCat,
		styles.SixCat,
		styles.SevenCat,
	]
	if (!resume) {
		return (
			<div style={{}}>
				<div
					className={styles.sectionBoxNew}
					style={{ display: 'flex', flexWrap: 'wrap' }}
				>
					<h2 className={styles.H2NameOfCategory}>
						{categorys_index}
					</h2>
					<div
						className={`${ColumnCardsStyles.AdCardsDivMob} ${styles.AdCardsDivMob}`}
					>
						<h2 className={ColumnCardsStyles.H2BestPractiqueMob}>
							Лучшие предложения:
						</h2>
						<Card
							cardsStyles={CardStylesMob}
							cardsAd={card_ads || []}
						/>
					</div>

					<div
						className={styles.catDivMain}
						style={{ marginRight: 65 }}
					>
						<div className={styles.CatDiv}>
							{sub_category_all?.map((Cat, index) => {
								const styleClass =
									styleClasses[index % styleClasses.length]
								if (!Cat.mass) {
									return (
										<div
											onClick={() => {
												if (Cat.cat) {
													setCat(Cat.cat)
												} else {
													setSubCat(Cat.category)
												}
											}}
											key={Cat.id}
											className={styleClass}
										>
											<p className={styles.CatText}>
												{Cat.category}
											</p>
										</div>
									)
								} else if (Cat.mass) {
									return (
										<select
											onChange={(e) => {
												if (Cat.mass?.[0].cat) {
													setCat(Cat.mass[0].cat)
													setSubCat(e.target.value)
												} else {
													setSubCat(e.target.value)
												}
											}}
											key={Cat.id}
											className={styleClass}
										>
											{Cat.mass[0].name.map((name) => {
												return (
													<option value={name}>
														{name}
													</option>
												)
											})}
										</select>
									)
								}
							})}
						</div>

						<div
							className={styles.cardsMainDiv}
							style={{ marginTop: 15 }}
						>
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
						<Card
							cardsStyles={CardsStylesColumn}
							cardsAd={card_ads}
						/>
					</div>
					<Pagination
						currentPage={page}
						setCurrentPage={setPage}
						totalPages={total_pages_ads}
					/>
				</div>
			</div>
		)
	} else if (resume) {
		return (
			<div style={{}}>
				<div
					className={styles.sectionBoxNew}
					style={{ display: 'flex', flexWrap: 'wrap' }}
				>
					<h2 className={styles.H2NameOfCategory}>
						{categorys_index}
					</h2>
					<div
						className={`${ColumnCardsStyles.AdCardsDivMob} ${styles.AdCardsDivMob}`}
					>
						<h2 className={ColumnCardsStyles.H2BestPractiqueMob}>
							Лучшие предложения:
						</h2>
						<Card
							cardsStyles={CardStylesMob}
							cardsAd={card_ads || []}
						/>
					</div>

					<div
						className={styles.catDivMain}
						style={{ marginRight: 65 }}
					>
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

						<div
							className={styles.cardsMainDiv}
							style={{ marginTop: 15 }}
						>
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
						<Card
							cardsStyles={CardsStylesColumn}
							cardsAd={card_ads}
						/>
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
}

export default Catalog
