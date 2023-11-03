import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import s from './NewCard.module.css'

interface ChildComponentProps {
	setPhotoStates: (files: File[]) => void // Укажите тип для setPhotoStates
}
const Reactdropzone: React.FC<ChildComponentProps> = ({ setPhotoStates }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles) {
				console.log('Accepted Files:', acceptedFiles)
				setPhotoStates(acceptedFiles)
			} else {
				console.error('No files accepted.')
			}
		},
		[setPhotoStates]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: true,
	})

	// ... остальной ваш код

	return (
		<div
			id='setPhoto'
			style={{
				width: '280px',
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			{...getRootProps()}
		>
			<div
				className={s.photoInput}
				id='setPhoto'
				style={{ display: 'none' }}
				{...getInputProps()}
			></div>
		</div>
	)
}

export default Reactdropzone
