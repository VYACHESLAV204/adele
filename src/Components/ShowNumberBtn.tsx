import { useState } from 'react'

interface ShowNumberBtnProps {
	phone: string
	btnClass: string
}

const ShowNumberBtn: React.FC<ShowNumberBtnProps> = ({ phone, btnClass }) => {
	const [showNumber, setShowNumber] = useState(false)
	return (
		<div onClick={() => setShowNumber(!showNumber)} className={btnClass}>
			{showNumber ? (
				<p style={{ cursor: 'pointer' }}>{phone}</p>
			) : (
				<p style={{ cursor: 'pointer' }}>Показать телефон</p>
			)}{' '}
		</div>
	)
}

export default ShowNumberBtn
