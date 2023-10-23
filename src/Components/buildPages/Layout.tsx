import Footer from './footer/Footer'
import Header from './Header/Header'
import Reg from '../modules/авторизация и регистрация/Reg'
interface HeaderProps {
	children?: React.ReactNode
	citys: any[]
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsOpen: (value: React.SetStateAction<boolean>) => void
	modalType: 'auth' | 'reg' | ''
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
	children,
	setCategory,
	setUnderCategory,
}) => {
	return (
		<>
			<Header
				setIsOpen={setIsOpen}
				setModalType={setModalType}
				citys={citys}

				setCategory={setCategory}
				setUnderCategory={setUnderCategory}
			/>

			<Reg
				setIsOpen={setIsOpen}
				modalType={modalType}
				isOpen={isOpen}
			/>
			<Footer children={children} />
		</>
	)
}

export default Layout
