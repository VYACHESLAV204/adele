import Footer from './footer/Footer'
import Header from './Header/Header'
import Reg from '../modules/авторизация и регистрация/Reg'
import { City } from '../modules/select/SelectTemplate'
import { iResult } from '../../interfaces/Interfaces'
import { useRef } from 'react'
interface HeaderProps {
	children?: React.ReactNode
	citys: any[]
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsOpen: (value: React.SetStateAction<boolean>) => void
	modalType: 'auth' | 'reg' | ''
	City: City | null
	setCity: React.Dispatch<React.SetStateAction<City | null>>
	isOpen: boolean
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
	inputValue: string
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	isOpenSearch: boolean
	setIsOpenSearch: React.Dispatch<React.SetStateAction<boolean>>
	res: iResult
	setRes: React.Dispatch<React.SetStateAction<iResult>>
}
const Layout: React.FC<HeaderProps> = ({
	citys,
	setModalType,
	setIsOpen,
	modalType,
	isOpen,
	City,
	setInputValue,
	inputValue,
	res,
	setRes,
	setIsOpenSearch,
	setCity,
	children,
	isOpenSearch,
	setCategory,
	setUnderCategory,
}) => {
	
	return (
		<>
			<Header
				City={City}
				setCity={setCity}
				setIsOpen={setIsOpen}
				setModalType={setModalType}
				setInputValue={setInputValue}
				inputValue={inputValue}
				res={res}
				isOpenSearch={isOpenSearch}
				setRes={setRes}
				setIsOpenSearch={setIsOpenSearch}
				citys={citys}
				setCategory={setCategory}
				setUnderCategory={setUnderCategory}
				isOpen={isOpen}
			/>

			<Reg
				setIsOpen={setIsOpen}
				setModalType={setModalType}
				modalType={modalType}
				isOpen={isOpen}
			/>
			<Footer children={children} />
		</>
	)
}

export default Layout
