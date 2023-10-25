import stylesF from './Footer.module.css'
interface IpropsFooter {
	children: React.ReactNode
}
const Footer: React.FC<IpropsFooter> = ({ children }) => {
	return (
		<div className={stylesF.Footer}>
			{children}
			<div className={stylesF.sectionBox}>
				<div className={stylesF.FooterMainDiv}>
					<div className={stylesF.PhoneNum}>
						<p className={stylesF.FooterTexts}>7 123 456 78 90</p>
					</div>
					<div className={stylesF.TexSupportDiv}>
						<p className={stylesF.FooterTexts}>
							Тех поддержка +7 123 456 78 90
						</p>
					</div>
					<div className={stylesF.EmailDiv}>
						<p className={stylesF.FooterTexts}>info@info.ru</p>
					</div>
				</div>
			</div>
			<div className={stylesF.sectionBoxMob}>
				<div className={stylesF.FooterMainDivMob}>
					<div className={stylesF.phoneEmail}>					
						<div className={stylesF.PhoneNum}>
							<p className={stylesF.FooterTexts}>7 123 456 78 90</p>
						</div>
						<div className={stylesF.EmailDiv}>
							<p className={stylesF.FooterTexts}>info@info.ru</p>
						</div>
					</div>
					<div className={stylesF.TexSupportDiv}>
						<p className={stylesF.FooterTexts}>
							Тех поддержка +7 123 456 78 90
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
