import { FC } from 'react'
import TextField from '@mui/material/TextField'

import Autocomplete from '@mui/material/Autocomplete'
interface City {
	label: string
	value: string
}
export interface AutocompleteOption {
	options: City[]
	setCity?: React.Dispatch<React.SetStateAction<City>>
}
const SelectTemplate: FC<AutocompleteOption> = ({ options, setCity }) => {
	return (
		<Autocomplete
			disablePortal
			id='combo-box-demo'
			options={options}
			sx={{ width: 200,height:50 }}
			renderInput={(params) => <TextField {...params} label='Город' />}
		/>
	)
}

export default SelectTemplate
