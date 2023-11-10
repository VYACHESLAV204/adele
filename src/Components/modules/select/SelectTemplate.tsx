import { FC, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { makeStyles } from '@mui/styles'
export interface City {
	label: string
	value: string
}
interface defaultCity {
	city: string
	status: boolean
}
interface selectCityProps {
	Citys: City[]
	City: City | null
	setCity: React.Dispatch<React.SetStateAction<City | null>>
	styles: React.CSSProperties
}

const useStyles = makeStyles({ autocomplete: { padding: '0px' } })
const SelectTemplate: FC<selectCityProps> = ({
	City,
	Citys,
	setCity,
	styles,
}) => {
	const [DefaultCity, setDefaultCity] = useState<City>()
	useEffect(() => {
		if (City?.label) {
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
	useEffect(() => {
		fetch(
			`http://stoneworking.ru/api/v1/city-get-user?jwt=${localStorage.getItem(
				'token'
			)}`
		)
			.then((res) => res.json())
			.then((data: defaultCity) => generateObj(data.city))
	}, [])
	function generateObj(label: string) {
		const DefaulCity = { label: label, value: label }
		setDefaultCity(DefaulCity)
	}
	console.log({ DefaultCity })

	const classes = useStyles()
	return (
		<>
			{DefaultCity && (
				<Autocomplete
					value={City}
					className={classes.autocomplete}
					sx={styles}
					options={Citys}
					filterOptions={filterOptions}
					renderInput={(params) => (
						<TextField {...params} label={DefaultCity.value} />
					)}
					size='small'
					onChange={(_: any, newValue: City | null) =>
						setCity(newValue)
					}
				/>
			)}
		</>
	)
}

export default SelectTemplate
