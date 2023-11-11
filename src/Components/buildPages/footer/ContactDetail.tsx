import stylesF from './Footer.module.css'


const ContactDetails = () => {
	return (
		<>
			<div className={stylesF.sectionBox}>
				<div className={stylesF.FooterMainDiv}>
					<div className={stylesF.TexSupportDiv}>
						<p className={stylesF.FooterTexts}>
							Тех поддержка +7 495 115 15 95
						</p>
					</div>
					<div className={stylesF.EmailDiv}>
						<p className={stylesF.FooterTexts}>
							info.stoneworking@yandex.ru
						</p>
					</div>
				</div>
			</div>
			<div className={stylesF.sectionBoxMob}>
				<div className={stylesF.FooterMainDivMob}>
					<div className={stylesF.phoneEmail}>
						<div className={stylesF.EmailDiv}>
							<p className={stylesF.FooterTexts}>
								info.stoneworking@yandex.ru
							</p>
						</div>
					</div>
					<div className={stylesF.TexSupportDiv}>
						<p className={stylesF.FooterTexts}>
							Тех поддержка +7 495 115 15 95
						</p>
					</div>
				</div>
			</div>
		</>
	 );
}
 
export default ContactDetails;
