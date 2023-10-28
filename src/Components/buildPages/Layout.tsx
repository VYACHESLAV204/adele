import Footer from './footer/Footer'
import Header from './Header/Header'
import Reg from '../modules/авторизация и регистрация/Reg'
import { OptionType } from '../modules/select/SelectTemplate'
interface HeaderProps {
	children?: React.ReactNode
	citys: any[]
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsOpen: (value: React.SetStateAction<boolean>) => void
	modalType: 'auth' | 'reg' | ''
	City: OptionType | undefined // updated this line
	setCity: React.Dispatch<React.SetStateAction<OptionType | undefined>>
	isOpen: boolean
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
}
const Layout: React.FC<HeaderProps> = ({
	citys,
	setModalType,
	setIsOpen,
	modalType,
	isOpen,
	City,
	setCity,
	children,
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
				citys={citys}
				setCategory={setCategory}
				setUnderCategory={setUnderCategory}
			/>

			<Reg setIsOpen={setIsOpen} setModalType={setModalType} modalType={modalType} isOpen={isOpen} />
			<Footer children={children} />
		</>
	)
}

export default Layout
