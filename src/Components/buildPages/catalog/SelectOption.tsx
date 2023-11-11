interface SelectOptionComponents {
	key: number,
	value: string,
	text: string,
	className: string,
	disabled: boolean
}

const SelectOption: React.FC<SelectOptionComponents> = ({key, value, text, className, disabled}) => {
	return (
		<option
			value={value}
			key={key}
			className={className}
			disabled={disabled}
		>
			{text}
		</option>
	);
}
 
export default SelectOption;