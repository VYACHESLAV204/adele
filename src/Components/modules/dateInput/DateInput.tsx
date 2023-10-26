import { useState, ChangeEvent } from 'react'
import s from '../../buildPages/summary/Summary.module.css'
import { SummaryFieldsType } from '../../buildPages/summary/Summary'
type DateInputProps = {
	updateSummary: (
		key: keyof SummaryFieldsType,
		newValue: string,
		index?: number
	) => void
	// ... any other props
}
const DateInput = ({ updateSummary }: DateInputProps) => {
	const [day, setDay] = useState('')
	const [month, setMonth] = useState('')
	const [year, setYear] = useState('')

	const handleDayChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setDay(event.target.value)
	const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setMonth(event.target.value)
	const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setYear(event.target.value)

	const handleInputClick = () => {
		const newDate = `${day}.${month}.${year}`
		updateSummary('data_birthday', newDate)
	}

	const days = [...Array(32).keys()].slice(1)
	const months = [...Array(13).keys()].slice(1)
	const currentYear = new Date().getFullYear()
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

	return (
		<div>
			<select
				onMouseLeave={handleInputClick}
				className={`${s.input} ${s.inputNewborn}`}
				onChange={handleDayChange}
			>
				{days.map((day, index) => (
					<option key={index} value={day}>
						{day}
					</option>
				))}
			</select>
			<select
				onMouseLeave={handleInputClick}
				className={`${s.input} ${s.inputNewborn2}`}
				onChange={handleMonthChange}
			>
				{months.map((month, index) => (
					<option key={index} value={month}>
						{month}
					</option>
				))}
			</select>
			<select
				onMouseLeave={handleInputClick}
				className={`${s.input} ${s.inputNewborn}`}
				onChange={handleYearChange}
			>
				{years.map((year, index) => (
					<option key={index} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	)
}

export default DateInput
