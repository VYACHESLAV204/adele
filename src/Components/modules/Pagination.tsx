import { FC } from 'react'
interface Pagprops {
	totalPages: number
}
const Pagination: FC<Pagprops> = ({ totalPages }) => {
	// Функция для изменения текущей страницы
	const changePage = (page) => {
		setCurrentPage(page)
	}

	// Генерация массива страниц для кнопок
	const generatePageNumbers = () => {
		const pageNumbers = []

		// Рассчитываем границы страниц для отображения
		let startPage = Math.max(1, currentPage - 2)
		let endPage = Math.min(totalPages, currentPage + 2)

		// Добавляем кнопки для предыдущих страниц
		if (startPage > 1) {
			pageNumbers.push(
				<button key={1} onClick={() => changePage(1)}>
					1
				</button>
			)
			if (startPage > 2) {
				pageNumbers.push(<span key='ellipsis_left'>...</span>)
			}
		}

		// Добавляем кнопки для текущего диапазона страниц
		for (let page = startPage; page <= endPage; page++) {
			pageNumbers.push(
				<button
					key={page}
					className={currentPage === page ? 'active' : ''}
					onClick={() => changePage(page)}
				>
					{page}
				</button>
			)
		}

		// Добавляем кнопки для следующих страниц
		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pageNumbers.push(<span key='ellipsis_right'>...</span>)
			}
			pageNumbers.push(
				<button key={totalPages} onClick={() => changePage(totalPages)}>
					{totalPages}
				</button>
			)
		}

		return pageNumbers
	}

	return (
		<div>
			<button
				disabled={currentPage === 1}
				onClick={() => changePage(currentPage - 1)}
			>
				&lt; Previous
			</button>
			{generatePageNumbers()}
			<button
				disabled={currentPage === totalPages}
				onClick={() => changePage(currentPage + 1)}
			>
				Next &gt;
			</button>
		</div>
	)
}

export default Pagination
