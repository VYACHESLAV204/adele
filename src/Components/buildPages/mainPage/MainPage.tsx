import Card from '../../modules/маленькая карточка/Card'
import { FC, useEffect } from 'react'
import BuldingMaterials from '../../../assets/BuldingMaterials.png'
import Stanki from '../../../assets/Stanki.png'
import Work from '../../../assets/Work.png'
import blocks from '../../../assets/blocks.png'
import carier from '../../../assets/carier.png'
import rituals from '../../../assets/rituals.png'
import serveces from '../../../assets/serveces.png'
import specialTequinick from '../../../assets/specialTequinick.png'
import tools from '../../../assets/tools.png'
import s from './MainPage.module.css'
import { CardAdResponse } from '../../../interfaces/Interfaces'
import { NavLink } from 'react-router-dom'
const MainPage: FC<CardAdResponse> = ({
	card_ads_1,
	card_ads_2,
	card_no_ads_1,
	card_no_ads_2,
	setCategory,
}) => {
	// 2 по 4 рек и 2 по 4 обычных на страницу
	useEffect(() => {
		console.log(card_ads_1, card_ads_2, card_no_ads_1, card_no_ads_2)
	}, [])

	const CardStyles = {
		marginRight: '0px',
	}
	const CardsStyles = {
		display: 'flex',
		flexWrap: 'wrap',
		// width: '100vw',
	}
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
	const CardStylesMob = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		width: '86vw',
	}
	return (
		<div className={s.sectionDiv}>
			<div className={s.MainMenuDiv}>
				{/* десктоп меню */}
				<div className={s.MenuDiv}>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Карьер')}
							className={s.MenuCarier}
						>
							<p className={s.MenuTexts}>КАРЬЕР</p>
							<img
								className={`${s.MenuImg} ${s.MenuCarierImg}`}
								src={carier}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Блоки')}
							className={s.MenuBlocks}
						>
							<p className={s.MenuTexts}>БЛОКИ</p>
							<img
								className={`${s.MenuImg} ${s.MenuBlocksImg}`}
								src={blocks}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Стройматериалы')}
							className={s.MenuBuildingMaterials}
						>
							<p className={s.MenuTexts}>СТРОЙМАТЕРИАЛЫ</p>
							<img
								className={`${s.MenuImg} ${s.MenuMaterialImg}`}
								src={BuldingMaterials}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Ритуальные изделия')}
							className={s.MenuRitualItems}
						>
							<p className={s.MenuTexts}>РИТУАЛЬНЫЕ ИЗДЕЛИЯ</p>
							<img
								className={`${s.MenuImg} ${s.MenuRitualsImg}`}
								src={rituals}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Станки')}
							className={s.MenuMachines}
						>
							<p className={s.MenuTexts}>СТАНКИ</p>
							<img
								className={`${s.MenuImg} ${s.MenuStankiImg}`}
								src={Stanki}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Инструменты')}
							className={s.MenuTools}
						>
							<p className={s.MenuTexts}>ИНСТРУМЕНТЫ</p>
							<img
								className={`${s.MenuImg} ${s.MenuToolsImg}`}
								src={tools}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Спецтехника')}
							className={s.MenuSpecialEquipment}
						>
							<p
								className={`${s.MenuTexts} ${s.MenuSpecialText}`}
							>
								СПЕЦТЕХНИКА
							</p>
							<img
								className={`${s.MenuImg} ${s.MenuSpecialImg}`}
								src={specialTequinick}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Работа')}
							className={s.MenuWork}
						>
							<p className={`${s.MenuTexts} ${s.MenuWorkText}`}>
								РАБОТА
							</p>
							<img
								className={`${s.MenuImg} ${s.MenuWorkImg}`}
								src={Work}
								alt=''
							/>
						</div>
					</NavLink>
					<NavLink className={s.NavLink} to={'/catalog/'}>
						<div
							onClick={() => setCategory('Услуги')}
							className={s.MenuServices}
						>
							<p
								className={`${s.MenuTexts} ${s.MenuServiceText}`}
							>
								УСЛУГИ
							</p>
							<img
								className={`${s.MenuImg} ${s.MenuServiceImg}`}
								src={serveces}
								alt=''
							/>
						</div>
					</NavLink>
				</div>
				{/* Мобильное меню */}
				<div className={s.menuBoxMob}>
					{/* Первая линия блоков */}
					<div className={`${s.firstLine}`}>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Карьер')}
								style={{
									marginRight: '1rem',
									marginLeft: '1rem',
								}}
								className={s.MenuCarier}
							>
								<p className={s.MenuTexts}>КАРЬЕР</p>
								<img
									className={`${s.MenuImg} ${s.MenuCarierImg}`}
									src={carier}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Блоки')}
								style={{ marginRight: '1rem' }}
								className={s.MenuBlocks}
							>
								<p className={s.MenuTexts}>БЛОКИ</p>
								<img
									className={`${s.MenuImg} ${s.MenuBlocksImg}`}
									src={blocks}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Стройматериалы')}
								style={{ marginRight: '1rem' }}
								className={s.MenuBuildingMaterials}
							>
								<p className={s.MenuTexts}>СТРОЙМАТЕРИАЛЫ</p>
								<img
									className={s.MenuImg}
									src={BuldingMaterials}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() =>
									setCategory('Ритуальные изделия')
								}
								style={{ marginRight: '1rem' }}
								className={s.MenuRitualItems}
							>
								<p className={s.MenuTexts}>
									РИТУАЛЬНЫЕ ИЗДЕЛИЯ
								</p>
								<img
									className={`${s.MenuImg} ${s.MenuRitualsImg}`}
									src={rituals}
									alt=''
								/>
							</div>
						</NavLink>
					</div>
					{/* Вторая линия блоков */}
					<div className={`${s.secondLine}`}>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Станки')}
								style={{
									marginRight: '1rem',
									marginLeft: '1rem',
								}}
								className={`${s.MenuMachines}`}
							>
								<p className={s.MenuTexts}>СТАНКИ</p>
								<img
									className={`${s.MenuImg} ${s.MenuStankiImg}`}
									src={Stanki}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Инструменты')}
								style={{ marginRight: '1rem' }}
								className={`${s.MenuToolsMob} ${s.MenuTools}`}
							>
								<p className={s.MenuTexts}>ИНСТРУМЕНТЫ</p>
								<img
									className={`${s.MenuImg} ${s.MenuToolsImg}`}
									src={tools}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Спецтехника')}
								style={{ marginRight: '1rem' }}
								className={s.MenuSpecialEquipment}
							>
								<p className={s.MenuTexts}>СПЕЦТЕХНИКА</p>
								<img
									className={`${s.MenuImg} ${s.MenuSpecialImg}`}
									src={specialTequinick}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Работа')}
								style={{ marginRight: '1rem' }}
								className={s.MenuWork}
							>
								<p className={s.MenuTexts}>РАБОТА</p>
								<img
									className={`${s.MenuImg} ${s.MenuWorkImg}`}
									src={Work}
									alt=''
								/>
							</div>
						</NavLink>
						<NavLink className={s.NavLink} to={'/catalog/'}>
							<div
								onClick={() => setCategory('Услуги')}
								style={{ marginRight: '1rem' }}
								className={s.MenuServices}
							>
								<p className={s.MenuTexts}>УСЛУГИ</p>
								<img
									className={`${s.MenuImg} ${s.MenuServiceImg}`}
									src={serveces}
									alt=''
								/>
							</div>
						</NavLink>
					</div>
				</div>
				<div className={s.AdCardsDiv}>
					<h2 className={s.H2BestPractique}>Лучшие предложения:</h2>
					<Card
						cardsStyles={CardsStylesColumn}
						cardsAd={card_ads_1 || []}
					/>
					{/* Рекламные в колонку */}
				</div>
			</div>
			<div className={s.AdCardsDivMob}>
				<h2 className={s.H2BestPractiqueMob}>Лучшие предложения:</h2>
				<Card cardsStyles={CardStylesMob} cardsAd={card_ads_1 || []} />
			</div>
			<h2 className={s.H2SpecialText}>Специальные предложения</h2>
			<div>
				<div className='container' style={{ display: 'flex' }}>
					<div className='row'>
						{/* рекламные горизонтально */}
						<Card
							cardsStyles={CardsStyles}
							inlineStyles={CardStyles}
							cardsAd={card_ads_2 || []}
						/>
						<h2 className={s.H2SpecialText}>Объявления для вас</h2>
						<Card
							inlineStyles={CardStyles}
							cardsStyles={CardsStyles}
							cardsAd={card_no_ads_1}
						/>
						<Card
							inlineStyles={CardStyles}
							cardsStyles={CardsStyles}
							cardsAd={card_no_ads_2}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
