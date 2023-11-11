import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
	ICatalogProps,
	CardAdResponse,
	ISummary,
	iResult,
} from './interfaces/Interfaces.js'
import './App.css'
import MainPage from './Components/buildPages/mainPage/MainPage.js'
import CardDetails from './Components/buildPages/cardinner/cardDetails.js'
import Catalog from './Components/buildPages/catalog/Catalog.js'
import Layout from './Components/buildPages/Layout.js'
import NewCard from './Components/buildPages/newCard/NewCard.js'
import Profile from './Components/buildPages/profileSetup/Profile.js'
import Summary from './Components/buildPages/summary/Summary.js'
import Settings from './Components/buildPages/settingsProfile/Settings.js'
import Defence from './Components/buildPages/profileDefence/defence.js'
import InfoProfile from './Components/buildPages/infoProfile/infoProfile.js'
import MyAds2 from './Components/buildPages/myAds/myAds.tsx'
import Worker from './Components/buildPages/worker/worker.js'
import Moderation from './Components/buildPages/moderation/moderation.js'
import Error401 from './Components/buildPages/401Error/401.js'
import { City } from './Components/modules/select/SelectTemplate.js'
import ProfileMob from './Components/buildPages/profilePopupMob/ProfilePopupMob.js'
import ContactDetails from './Components/buildPages/footer/ContactDetail.tsx'

function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('')
	const [isOpen, setIsOpen] = useState(false)
	const [citys, setCitys] = useState([])
	const [cardsArray, setCardsArray] = useState<ICatalogProps>()
	const [resume, setResume] = useState<ISummary>()
	const [cards, setCards] = useState<CardAdResponse>()
	const [categoryForNewCard, setCategoryForNewCard] = useState('')
	const [underCategoryForNewCard, setUnderCategoryForNewCard] = useState('')
	const [page, setPage] = useState(1)
	const [city, setCity] = useState<City | null>(null)
	const [inputValue, setInputValue] = useState('')
	const [res, setRes] = useState<iResult>({
		card_results: [{ caption: ' ', summary: false, id_card: 1 }],
	})
	const [isOpenSearch, setIsOpenSearch] = useState(false)
	const isLoggin = localStorage.getItem('status')
	useEffect(() => {
		console.log(isLoggin)
	}, [])

	useEffect(() => {
		fetch('http://stoneworking.ru/api/v1/citys')
			.then((response) => response.json())
			.then((data) => setCitys(data.city))
			.catch((error) => console.log(error))

		fetch('http://stoneworking.ru/api/v1/index-page')
			.then((responce) => responce.json())
			.then((data: CardAdResponse) => setCards(data))
	}, [])
	useEffect(() => {
		document.documentElement.setAttribute('lang', 'ru') // или querySelector()
		document.createElement('meta')
		var metaTag = document.createElement('meta')
		metaTag.name = 'google'
		metaTag.content = 'notranslate'

		// Находим <head> элемент на странице
		var head = document.head || document.getElementsByTagName('head')[0]

		// Вставляем элемент <meta> в <head>
		head.appendChild(metaTag)
	}, [])
	useEffect(() => {
		fetch('http://stoneworking.ru/api/v1/index-category', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				category:
					categoryForNewCard !== '' ? categoryForNewCard : 'Блоки',
				sub_category:
					underCategoryForNewCard !== ''
						? underCategoryForNewCard
						: null,
				page: page,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setCardsArray(data)
			})
			.catch((error) => {
				console.error('Ошибка:', error)
			})
	}, [categoryForNewCard, underCategoryForNewCard, page])
	useEffect(() => {
		if (
			categoryForNewCard === 'Работа' &&
			underCategoryForNewCard === 'Ищу сотрудника'
		) {
			fetch('http://stoneworking.ru/api/v1/index-summary', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					category: categoryForNewCard,
					sub_category: underCategoryForNewCard,
					page: page,
				}),
			})
				.then((response) => response.json())
				.then((data: ISummary) => {
					setResume(data)
				})
				.catch((error) => {
					console.error('Ошибка:', error)
				})
		}
	}, [categoryForNewCard, underCategoryForNewCard, page])

	useEffect(() => {
		console.log(cardsArray)
	}, [cardsArray])

	return (
		<Router>
			<div className='footerFix'>
				<Layout
					citys={citys}
					setModalType={setModalType}
					setIsOpen={setIsOpen}
					City={city}
					inputValue={inputValue}
					setInputValue={setInputValue}
					setRes={setRes}
					res={res}
					isOpenSearch={isOpenSearch}
					setIsOpenSearch={setIsOpenSearch}
					setCity={setCity}
					isOpen={isOpen}
					modalType={modalType}
					setCategory={setCategoryForNewCard}
					setUnderCategory={setUnderCategoryForNewCard}
				>
					<Routes>
						<Route
							path='/'
							element={
								cards && (
									<MainPage
										card_ads_1={cards.card_ads_1}
										card_ads_2={cards.card_ads_2}
										card_no_ads_1={cards.card_no_ads_1}
										card_no_ads_2={cards.card_no_ads_2}
										status={cards.status}
										setCategory={setCategoryForNewCard}
									/>
								)
							}
						/>
						<Route
							path='/worker/:id'
							element={
								<Worker
									res={res}
									card_noads={resume?.card_noads}
								/>
							}
						/>
						<Route
							//Готово
							path='/card/:id'
							element={
								cards && (
									<CardDetails
										card_ads_1={cards.card_ads_1 || []}
										res={res}
										card_ads_2={cards.card_ads_2 || []}
										card_no_ads_1={
											cards.card_no_ads_1 || []
										}
										card_ads={cardsArray?.card_ads}
										card_noads={cardsArray?.card_noads}
										card_no_ads_2={
											cards.card_no_ads_2 || []
										}
										setCategory={setCategoryForNewCard}
									/>
								)
							}
						/>
						<Route
							path='/catalog/'
							element={
								cardsArray && (
									<Catalog
										card_ads={cardsArray.card_ads}
										card_noads={cardsArray.card_noads}
										has_next_ads={cardsArray.has_next_ads}
										categorys_index={
											cardsArray.categorys_index
										}
										page={page}
										has_next_noads={
											cardsArray.has_next_noads
										}
										setPage={setPage}
										page_ads={cardsArray.page_ads}
										page_noads={cardsArray.page_noads}
										stasus={cardsArray.stasus}
										categoryForNewCard={categoryForNewCard}
										underCategoryForNewCard={
											underCategoryForNewCard
										}
										setCat={setCategoryForNewCard}
										setSubCat={setUnderCategoryForNewCard}
										sub_category_all={
											cardsArray.sub_category_all
										}
										resume={resume}
										total_pages_ads={
											cardsArray.total_pages_ads
										}
										total_pages_noads={
											cardsArray.total_pages_noads
										}
									/>
								)
							}
						/>

						<Route
							// Диме
							path='/new-card/'
							element={isLoggin ? <NewCard /> : <Error401 />}
						/>

						<Route
							//Диме
							path='/profile/'
							element={
								isLoggin ? (
									<Profile
										City={city}
										setCity={setCity}
										citys={citys}
									/>
								) : (
									<Error401 />
								)
							}
						/>

						<Route
							//Готово
							path='/summary/'
							element={isLoggin ? <Summary /> : <Error401 />}
						/>
						<Route
							//Готово
							path='/settings/'
							element={isLoggin ? <Settings /> : <Error401 />}
						/>
						<Route
							path='/my-ads/'
							element={isLoggin ? <MyAds2 /> : <Error401 />}
						/>
						<Route
							//Готово
							path='/defence/'
							element={isLoggin ? <Defence /> : <Error401 />}
						/>
						<Route
							// Готово
							path='/info-profile/'
							element={
								isLoggin ? (
									<InfoProfile citys={citys} />
								) : (
									<Error401 />
								)
							}
						/>

						<Route
							path='/worker/'
							element={isLoggin ? <Worker /> : <Error401 />}
						/>

						<Route
							path='/moderation/'
							element={isLoggin ? <Moderation /> : <Error401 />}
						/>
						<Route
							path='/profile-mob/'
							element={isLoggin ? <ProfileMob /> : <Error401 />}
						/>
					</Routes>
				</Layout>
			</div>
			<ContactDetails />
		</Router>
	)
}
export default App
