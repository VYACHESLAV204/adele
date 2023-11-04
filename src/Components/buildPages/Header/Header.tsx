import styles from './Header.module.css'
import { useState, useEffect } from 'react'

import Menu from '../../modules/Меню/Menu'
import logo from '../../../assets/logo.svg'
import geoForHeader from '../../../assets/geoForHeader.svg'
import HeaderMenu3Line from '../../../assets/HeaderMenu3Line.svg'
import InputButton from '../../modules/Поиск в шапке/Search'
import User from '../../../assets/solar_user-outline.svg'
import Interface from '../../../assets/interface.svg'
import SelectTemplate, {
	AutocompleteOption,
} from '../../modules/select/SelectTemplate'
import { NavLink } from 'react-router-dom'

type HeaderProps = {
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
	setModalType: React.Dispatch<React.SetStateAction<'auth' | 'reg' | ''>>
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	citys: { label: string; value: string }[]
	City: AutocompleteOption | undefined // updated this line
	setCity: React.Dispatch<
		React.SetStateAction<AutocompleteOption | undefined>
	>
}

const Header: React.FC<HeaderProps> = ({
	setModalType,
	setIsOpen,
	citys,
	City,
	setCity,
	setCategory,
	setUnderCategory,
}) => {
	const [BurgerisOpen, setBurgerisOpen] = useState(false)
	const [NavOrNew, setNavOrNew] = useState(false)
	const headerUsername = localStorage.getItem('username')
	const isLoggin = localStorage.getItem('status')
	const [mobileSearch, setMobileSearch] = useState(false)
	const [PcSearch, setPcSearch] = useState(true)
	const [MenuUser, setMenuUser] = useState(false)
	function logout() {
		fetch(
			`http://stoneworking.ru/api/v1/logout?jwt=${localStorage.getItem(
				'token'
			)}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => console.log(res))
			.then(() => {
				localStorage.removeItem('token'),
					localStorage.removeItem('status')
			})
	}
	const myStyles: React.CSSProperties = {
		display: 'flex',
	}
	useEffect(() => {
		if (window.innerWidth <= 450) {
			setPcSearch(false)
			setMobileSearch(true)
		}
		if (window.innerWidth >= 450) {
			setPcSearch(true)
			setMobileSearch(false)
		}
	}, [window.innerWidth])
	useEffect(() => {
		console.log(PcSearch, mobileSearch)
	}, [PcSearch, mobileSearch])

	function RegionSelect1() {
		// Состояние для выбранного региона
		
		return (
			<div className={styles.RegionDiv}>
				<img src={geoForHeader} alt='' />
				<SelectTemplate options={citys} />
			</div>
		)
	}

	return (
		<div className={styles.MainDiv}>
			<NavLink to={'/'}>
				<img className={styles.logo} src={logo} alt='Логотип' />
			</NavLink>
			{RegionSelect1()}
			<div
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setNavOrNew(false)
					setBurgerisOpen(!BurgerisOpen)
				}}
				className={styles.BurgerMenu}
			>
				<button>
					<img src={HeaderMenu3Line} alt='' />
				</button>
				<h2 style={{ width: '120px' }}>Все категории</h2>
				<Menu
					NavOrNew={NavOrNew}
					setCategory={setCategory}
					setUnderCategory={setUnderCategory}
					BurgerisOpen={BurgerisOpen}
					setBurgerIsOpen={setBurgerisOpen}
				></Menu>
			</div>
			<div className={styles.searchContainer}>
				{PcSearch ? <InputButton styles={myStyles} /> : <></>}
			</div>
			<div>
				<button
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
						setNavOrNew(true)
						setBurgerisOpen(!BurgerisOpen)
					}}
					className={styles.NewAdd}
				>
					Разместить обьявление
				</button>
				<Menu
					NavOrNew={NavOrNew}
					setCategory={setCategory}
					setUnderCategory={setUnderCategory}
					BurgerisOpen={BurgerisOpen}
					setBurgerIsOpen={setBurgerisOpen}
				></Menu>
			</div>
			{isLoggin ? (
				<div className={styles.userNameMob}>
					<h1
						onClick={() => setMenuUser(!MenuUser)}
						className={
							MenuUser ? styles.userLoginActive : styles.userLogin
						}
					>
						{headerUsername}
					</h1>
					<ul className={styles.Ul}>
						<NavLink to={'/my-ads/'}>
							<li className={styles.liItem}>Мой аккаунт</li>
						</NavLink>
						<li
							style={{ cursor: 'pointer' }}
							onClick={() => logout()}
							className={styles.liItem}
						>
							Выйти
						</li>
					</ul>
				</div>
			) : (
				<div className={styles.signInIpDiv}>
					<button
						className={styles.signInIp}
						onClick={() => {
							setModalType('auth')
							setIsOpen(true)
						}}
					>
						Вход
					</button>
					<p className={styles.signInIpP}>и</p>
					<button
						className={styles.signInIp}
						onClick={() => {
							setModalType('reg')
							setIsOpen(true)
						}}
					>
						Регистрация
					</button>
				</div>
			)}
			{isLoggin ? (
				<NavLink
					className={styles.LinkToProfileMob}
					style={{ width: '50px' }}
					to={'/profile-mob/'}
				>
					<img src={User} alt='' />
				</NavLink>
			) : (
				<div
					onClick={() => {
						setModalType('auth')
						setIsOpen(true)
					}}
					className={styles.signInDivMob}
				>
					<img src={User} alt='' />
				</div>
			)}
			<div
				className={`${styles.searchContainer} ${styles.searchContainerMob}`}
			>
				{mobileSearch ? <InputButton styles={myStyles} /> : <></>}
			</div>
			<div
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setNavOrNew(false)
					setBurgerisOpen(!BurgerisOpen)
				}}
				className={styles.signInDivMob}
			>
				<img src={Interface} alt='' />
			</div>
		</div>
	)
}
export default Header
