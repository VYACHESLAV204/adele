import { ICatalogProps } from '../../../interfaces/Interfaces'
import { FC } from 'react'
import CardMain from '../../modules/большая карточка/CardMain'
import Card from '../../modules/маленькая карточка/Card'
import ColumnCardsStyles from '../mainPage/MainPage.module.css'
import styles from './Catalog.module.css'
import Pagination from '../../modules/pagination/Pagination'

const Catalog: FC<ICatalogProps> = ({
	card_ads,
	page,
	resume,
	card_noads,
	setPage,
	setCat,
	setSubCat,
	categoryForNewCard,
	underCategoryForNewCard,
	categorys_index,
	sub_category_all,
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

	const styleClasses = [
		styles.OneCat,
		styles.TwoCat,
		styles.ThreeCat,
		styles.FourCat,
		styles.FiveCat,
		styles.SixCat,
		styles.SevenCat,
	]
	if (
		categoryForNewCard === 'Работа' &&
		underCategoryForNewCard === 'Ищу сотрудника'
	) {
		console.log('1')
		return (
			<div>
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
							card_noads={resume?.card_noads}
						/>
					</div>

					<div
						className={styles.catDivMain}
						style={{ marginRight: 65 }}
					>
						{sub_category_all && (
							<div className={styles.CatDiv}>
								{sub_category_all?.map((Cat, index) => {
									const styleClass =
										styleClasses[
											index % styleClasses.length
										]
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
													{Cat.category.toUpperCase()}
												</p>
											</div>
										)
									} else if (Cat.mass) {
										return (
											<select
												style={{
													fontSize: '15px',
													fontWeight: '500',
													fontFamily: 'Vela Sans',
												}}
												onChange={(e) => {
													if (Cat.mass?.[0].cat) {
														setCat(Cat.mass[0].cat)
														setSubCat(
															e.target.value
														)
													} else {
														setSubCat(
															e.target.value
														)
													}
												}}
												key={Cat.id}
												className={styleClass}
											>
												{Cat.mass[0].name.map(
													(name) => {
														return (
															<option
																style={{
																	fontSize:
																		'15px',
																	fontWeight:
																		'500',
																	fontFamily:
																		'Vela Sans',
																}}
																value={name}
															>
																{name}
															</option>
														)
													}
												)}
											</select>
										)
									}
								})}
							</div>
						)}
						<div
							className={styles.cardsMainDiv}
							style={{ marginTop: 15 }}
						>
							<CardMain
								Cards={card_noads}
								card_noads={resume?.card_noads}
							/>
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
							card_noads={resume?.card_noads}
						/>
					</div>
					<Pagination
						currentPage={page}
						setCurrentPage={setPage}
						totalPages={total_pages_noads}
					/>
				</div>
			</div>
		)
	} else {
		console.log('2')

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
												{Cat.category.toUpperCase()}
											</p>
										</div>
									)
								} else if (Cat.mass) {
									return (
										<select
											style={{
												fontSize: '15px',
												fontWeight: '500',
												fontFamily: 'Vela Sans',
											}}
											onChange={(e) => {
												if (Cat.mass?.[0].cat) {
													setCat(Cat.mass[0].cat)
													setSubCat(e.target.value)
												} else {
													setSubCat(e.target.value)
												}
											}}
											key={Cat.id}
											className={`${styleClass} ${styles.CenteredSelect}`}
											defaultValue='empty'
										>
											<option
														style={{
															fontSize: '15px',
															fontWeight: '500',
															fontFamily:
																'Vela Sans',
														}}
														value='empty'
														disabled
													>
														ФИЛЬТР
													</option>
											{Cat.mass[0].name.map((name) => {
												return (
													<option
														style={{
															fontSize: '15px',
															fontWeight: '500',
															fontFamily:
																'Vela Sans',
														}}
														value={name}
													>
														{name.toUpperCase()}
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
							<CardMain Cards={card_noads} />
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
						totalPages={total_pages_noads}
					/>
				</div>
			</div>
		)
	}
}

export default Catalog
