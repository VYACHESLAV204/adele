import { FC, useEffect } from 'react'
import s from './Pagination.module.css'
import { CardAd } from '../../../interfaces/Interfaces'
interface Pagprops {
	totalPages: number
	currentPage: number
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
	noads: CardAd[]
}
const Pagination: FC<Pagprops> = ({
	totalPages,
	currentPage,
	setCurrentPage,
	noads,
}) => {
	// Функция для изменения текущей страницы
	const changePage = (page: number) => {
		setCurrentPage(page)
	}
	useEffect(() => {
		console.log(currentPage)
	}, [])

	// Генерация массива страниц для кнопок
	const generatePageNumbers = () => {
		const pageNumbers = []

		// Рассчитываем границы страниц для отображения
		let startPage = Math.max(1, currentPage - 2)
		let endPage = Math.min(totalPages, currentPage + 2)

		// Добавляем кнопки для предыдущих страниц
		

		// Добавляем кнопки для текущего диапазона страниц
		for (let page = startPage; page <= endPage; page++) {
			pageNumbers.push(
				<button
					key={page}
					className={currentPage === page ? s.active : s.inactive}
					onClick={() => changePage(page)}
				>
					{page}
				</button>
			)
		}

		// Добавляем кнопки для следующих страниц
		

		return pageNumbers
	}

	return (
		<div style={{display:'flex',alignItems:'center'}}>
			<button
				style={{ border: '0px', backgroundColor: '#ffffff' }}
				disabled={currentPage === 1}
				onClick={() => changePage(currentPage - 1)}
			>
			&lt; Предыдущая 
			</button>
			{generatePageNumbers()}
			<button
				style={{ border: '0px', backgroundColor: '#ffffff' }}
				disabled={currentPage === totalPages || noads.length === 0}
				onClick={() => changePage(currentPage + 1)}
			>
				Следующая &gt;
			</button>
		</div>
	)
}

export default Pagination
