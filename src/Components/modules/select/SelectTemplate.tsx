import { FC, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { makeStyles } from '@mui/styles'
export interface City {
	label: string
	value: string
}

interface selectCityProps {
	Citys: City[]
	City: City | null
	setCity: React.Dispatch<React.SetStateAction<City | null>>
}

const useStyles = makeStyles({ autocomplete: { padding: '0px' } })
const SelectTemplate: FC<selectCityProps> = ({ City, Citys, setCity }) => {
	useEffect(() => {
		if (City !== null) {
			fetch(
				`http://stoneworking.ru/api/v1/replace_city?jwt=${localStorage.getItem(
					'token'
				)}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						city: City.label,
					}),
				}
			)
		}
	}, [City])

	const filterOptions = (
		options: City[],
		{ inputValue }: { inputValue: string }
	) => {
		return options.filter((option) =>
			option.label.toLowerCase().includes(inputValue.toLowerCase())
		)
	}
	const classes = useStyles()
	return (
		<>
			<Autocomplete
				value={City}
				className={classes.autocomplete}
				sx={{ width: '170px', marginLeft: '0.5rem' }}
				options={Citys}
				filterOptions={filterOptions}
				renderInput={(params) => (
					<TextField {...params} label='Выберите город' />
				)}
				size='small'
				onChange={(_: any, newValue: City | null) => setCity(newValue)}
			></Autocomplete>
		</>
	)
}

export default SelectTemplate
