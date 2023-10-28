// RegionSelect.tsx

import Select from 'react-select'

export type OptionType = { label: string; value: string }
type RegionSelectProps = {
	citys: { label: string; value: string }[]
	style?: { width: string; marginLeft: string }
	City: OptionType | undefined // updated this line
	setCity: React.Dispatch<React.SetStateAction<OptionType | undefined>>
}
const RegionSelectTemplate: React.FC<RegionSelectProps> = ({
	citys,
	setCity,
	style,
	City,
}) => {
	const handleChange = (selectedOption: OptionType | null) => {
		if (selectedOption !== null) {
			setCity(selectedOption)
		}
	}

	return (
		<Select
			value={City}
			options={citys}
			onChange={handleChange}
			defaultInputValue="Выберите город"
			styles={{
				control: (base) => ({
					...base,
					marginLeft: style?.marginLeft || 10,
					width: style?.width || 160,
				}),
			}}
		/>
	)
}

export default RegionSelectTemplate
