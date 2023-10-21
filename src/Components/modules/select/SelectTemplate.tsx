// RegionSelect.tsx
import { useState } from 'react'
import Select from 'react-select'

type OptionType = { label: string; value: string }
type RegionSelectProps = {
	citys: { label: string; value: string }[]
	style?: { width: string }
}

const RegionSelectTemplate: React.FC<RegionSelectProps> = ({
	citys,
	style,
}) => {
	const [selectedRegion, setSelectedRegion] = useState<OptionType>(citys[0])

	const handleChange = (
		selectedOption: OptionType | null,
		
	) => {
		if (selectedOption !== null) {
			setSelectedRegion(selectedOption)
		}
	}
	return (
		<Select
			value={selectedRegion}
			options={citys}
			onChange={handleChange}
			styles={{
				control: (base) => ({
					...base,
					marginLeft: 10,
					width: style?.width || 160,
				}),
			}}
		/>
	)
}

export default RegionSelectTemplate
