import stylesF from './Footer.module.css'
interface IpropsFooter {
	children: React.ReactNode
}
const Footer: React.FC<IpropsFooter> = ({ children }) => {
	return (
		<div className={stylesF.Footer}>
			{children}
		</div>
	)
}

export default Footer
