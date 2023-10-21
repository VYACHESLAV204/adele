import styles from './Header.module.css'
import { useEffect, useState } from 'react'

import Menu from '../../modules/Меню/Menu'
import logo from '../../../assets/logo.svg'
import geoForHeader from '../../../assets/geoForHeader.svg'
import HeaderMenu3Line from '../../../assets/HeaderMenu3Line.svg'
import InputButton from '../../modules/Поиск в шапке/Search'
import RegionSelectTemplate from '../../modules/select/SelectTemplate'
type HeaderProps = {
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
	setModalType: React.Dispatch<React.SetStateAction<'auth' | 'reg' | ''>>
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	isLoggin: boolean
	citys: { label: string; value: string }[]
}

const Header: React.FC<HeaderProps> = ({
	setModalType,
	setIsOpen,
	citys,
	isLoggin,
	setCategory,
	setUnderCategory,
}) => {
	const [BurgerisOpen, setBurgerisOpen] = useState(false)
	useEffect(() => {
		console.log(isLoggin)
	}, [isLoggin])

	function RegionSelect() {
		// Состояние для выбранного региона

		return (
			<div className={styles.RegionDiv}>
				<img src={geoForHeader} alt='' />
				<RegionSelectTemplate citys={citys}></RegionSelectTemplate>
			</div>
		)
	}

	return (
		<div className={styles.MainDiv}>
			<img src={logo} alt='Логотип' />
			{RegionSelect()}
			<div
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
					setBurgerisOpen(!BurgerisOpen)
				}}
				className={styles.BurgerMenu}
			>
				<button>
					<img src={HeaderMenu3Line} alt='' />
				</button>
				<h2>Все категории</h2>
				<Menu
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
				<button className={styles.NewAdd}>Разместить обьявление</button>
			</div>
			{isLoggin ? (
				<div>
					<h1>sa</h1>
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
		</div>
	)
}
export default Header
