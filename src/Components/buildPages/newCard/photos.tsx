import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import s from './NewCard.module.css'
import plus from '../../../assets/plus.svg'
interface ChildComponentProps {
	setPhotoStates: (files: File[]) => void // Укажите тип для setPhotoStates
}
const Reactdropzone: React.FC<ChildComponentProps> = ({ setPhotoStates }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			// Обработка загруженных файлов, например, добавление их в photoStates через setPhotoStates

			setPhotoStates(acceptedFiles)
		},
		[setPhotoStates]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: true,

		onDragEnter: (e) => e.preventDefault,
		onDragLeave: (e) => e.preventDefault,
		onDragOver: (e) => e.preventDefault,
		onDropAccepted(_, event) {
			event.preventDefault()
		},
	})

	// ... остальной ваш код

	return (
		<div
			style={{
				width: '280px',
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			{...getRootProps()}
		>
            <img style={{width:'20px',height:'20px'}} src={plus} alt='' />
			<div
				className={s.photoInput}
				id='setPhoto'
				style={{ display: 'none' }}
				{...getInputProps()}
			>
			</div>
		</div>
	)
}

export default Reactdropzone
