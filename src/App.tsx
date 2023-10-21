import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ICatalogProps } from './interfaces/Interfaces.js'
import { CardAdResponse } from './interfaces/Interfaces.js'
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
import MyAds from './Components/buildPages/myAds/myAds.js'
import Worker from './Components/buildPages/worker/worker.js'
import Moderation from './Components/buildPages/moderation/moderation.js'

function App() {
	const [modalType, setModalType] = useState<'auth' | 'reg' | ''>('')
	const [isOpen, setIsOpen] = useState(false)
	const [citys, setCitys] = useState([])
	const [cardsArray, setCardsArray] = useState<ICatalogProps>()
	const [cards, setCards] = useState<CardAdResponse>()
	const [categoryForNewCard, setCategoryForNewCard] = useState('')
	const [underCategoryForNewCard, setUnderCategoryForNewCard] = useState('')

	useEffect(() => {
		fetch('http://31.129.105.19/api/v1/citys')
			.then((response) => response.json())
			.then((data) => setCitys(data.city))
			.catch((error) => console.log(error))

		fetch('http://31.129.105.19/api/v1/index-page')
			.then((responce) => responce.json())
			.then((data: CardAdResponse) => setCards(data))
	}, [])

	useEffect(() => {
		fetch('http://31.129.105.19/api/v1/index-category', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				category: categoryForNewCard,
				sub_category: underCategoryForNewCard,
				page: 1,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setCardsArray(data)
			})
			.catch((error) => {
				console.error('Ошибка:', error)
			})
	}, [categoryForNewCard, underCategoryForNewCard])

	useEffect(() => {
		console.log(cardsArray)
	}, [cardsArray])

	return (
		<Router>
			<div>
				<Layout
					citys={citys}
					setModalType={setModalType}
					setIsOpen={setIsOpen}
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
									/>
								)
							}
						/>

						<Route
							path='/card/:id'
							element={
								cards && (
									<CardDetails
										card_ads_1={cards.card_ads_1 || []}
										card_ads_2={cards.card_ads_2 || []}
										card_no_ads_1={
											cards.card_no_ads_1 || []
										}
										card_no_ads_2={
											cards.card_no_ads_2 || []
										}
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
										has_next_noads={
											cardsArray.has_next_noads
										}
										page_ads={cardsArray.page_ads}
										page_noads={cardsArray.page_noads}
										stasus={cardsArray.stasus}
										sub_category_all={
											cardsArray.sub_category_all
										}
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
							path='/new-card/'
							element={
								<NewCard
									category={categoryForNewCard}
									underCategory={underCategoryForNewCard}
								/>
							}
						/>
						<Route
							path='/profile/'
							element={<Profile citys={citys} />}
						/>

						<Route path='/summary/' element={<Summary />} />
						<Route path='/settings/' element={<Settings />} />
						<Route path='/defence/' element={<Defence />} />
						<Route path='/info-profile' element={<InfoProfile />} />
						<Route path='/my-ads/' element={<MyAds />} />
						<Route path='/worker/' element={<Worker />} />
						<Route path='/moderation/' element={<Moderation />} />
					</Routes>
				</Layout>
			</div>
		</Router>
	)
}
export default App
//Это основной компонент,если хочешь посмотреть какой-то блок,то замени им элемент MainPage Удалив cardData
