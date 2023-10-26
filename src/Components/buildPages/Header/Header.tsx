import styles from './Header.module.css'
import { useState } from 'react'

import Menu from '../../modules/Меню/Menu'
import logo from '../../../assets/logo.svg'
import geoForHeader from '../../../assets/geoForHeader.svg'
import HeaderMenu3Line from '../../../assets/HeaderMenu3Line.svg'
import InputButton from '../../modules/Поиск в шапке/Search'
import RegionSelectTemplate from '../../modules/select/SelectTemplate'
import User from '../../../assets/solar_user-outline.svg'
import Interface from '../../../assets/interface.svg'
import { OptionType } from '../../modules/select/SelectTemplate'
type HeaderProps = {
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
	setModalType: React.Dispatch<React.SetStateAction<'auth' | 'reg' | ''>>
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	citys: { label: string; value: string }[]
	City: OptionType | undefined // updated this line
	setCity: React.Dispatch<React.SetStateAction<OptionType | undefined>>
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

	function RegionSelect() {
		// Состояние для выбранного региона

		return (
			<div className={styles.RegionDiv}>
				<img src={geoForHeader} alt='' />
				<RegionSelectTemplate
					City={City}
					setCity={setCity}
					citys={citys}
				/>
			</div>
		)
	}

	return (
		<div className={styles.MainDiv}>
			<img className={styles.logo} src={logo} alt='Логотип' />
			{RegionSelect()}
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
				<h2>Все категории</h2>
				<Menu
					NavOrNew={NavOrNew}
					setCategory={setCategory}
					setUnderCategory={setUnderCategory}
					BurgerisOpen={BurgerisOpen}
					setBurgerIsOpen={setBurgerisOpen}
				></Menu>
			</div>
			<div className={styles.searchContainer}>
				<InputButton />
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
					<h1>{headerUsername}</h1>
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
			<div className={styles.signInDivMob}>
				<img src={User} alt='' />
			</div>
			<div
				className={`${styles.searchContainer} ${styles.searchContainerMob}`}
			>
				<InputButton />
			</div>
			<div className={styles.signInDivMob}>
				<img src={Interface} alt='' />
			</div>
		</div>
	)
}
export default Header
