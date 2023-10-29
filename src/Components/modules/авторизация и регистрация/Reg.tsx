import RegFirst from './RegFirst'
import { RegSecond } from './RegSecond'
import RegThird from './RegThird'
import { useState } from 'react'
import Modal from './Modal'
import Auth from './Auth'

type RegProps = {
	modalType: 'auth' | 'reg' | ''
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
}
const Reg: React.FC<RegProps> = (props: RegProps) => {
	const [stage, setStage] = useState(1)
	const [email, setEmail] = useState('')

	const [isLegalEntity, setIsLegalEntity] = useState<
		'Физическое лицо' | 'Юридическое лицо'
	>('Физическое лицо')

	return (
		<>
			<Modal
				isOpen={props.isOpen}
				closeModal={() => props.setIsOpen(false)}
			>
				{props.modalType === 'auth' && (
					<Auth
						setModalType={props.setModalType}
						closeModal={() => props.setIsOpen(false)}
					/>
				)}
				{props.modalType === 'reg' && (
					<>
						{stage === 1 && (
							<RegFirst
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
							/>
						)}
						{stage === 2 && (
							<RegSecond
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
							/>
						)}
						{stage === 3 && (
							<RegThird
								stage={stage}
								setStage={setStage}
								email={email}
								setEmail={setEmail}
								setModalType={props.setModalType}
								isLegalEntity={isLegalEntity}
								setIsLegalEntity={setIsLegalEntity}
							/>
						)}
					</>
				)}
			</Modal>
		</>
	)
}

export default Reg
