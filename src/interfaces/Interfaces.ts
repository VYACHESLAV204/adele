export interface CardAdResponse {
	status?: boolean
	card_ads_1: CardAd[]
	card_ads_2: CardAd[]
	card_no_ads_1: CardAd[]
	card_no_ads_2: CardAd[]
	card_ads?: CardAd[]
	card_noads?: CardAd[]
	setCategory: React.Dispatch<React.SetStateAction<string>>
}

export interface CardAd {
	ads: boolean
	caption: string
	category: string
	city: string
	description: string
	email: string
	id_card: number
	id_user: string
	path_file: string[]
	phone: string
	price: string
	subcategory: string
	tariff: string
	telephone: string
	telephone_two: null | string
	username: string
}
export interface CardMod {
	caption: string
	category: string
	check_moder: string
	city: string
	description: string
	email: string
	id_card: number
	id_user: string
	path_file: string[]
	phone: string
	price: string
	subcategory: string
	tariff: string
	username: string
}
export interface cardSummary {
	about_me: string
	caption: string
	city: string
	category: string
	contry_people: string
	data_birthday: string
	date: string
	description: string
	educationFields: {
		name_universitet: string
		universitet_why_jobs: string
		years_stop_univer: string
	}[]
	email: string
	gender: string
	graphic_job: null
	id_card: number
	is_user: string
	job_next_day: string
	languageFields: { language: string; level_language: string }[]
	path_file: string[]
	phone: string
	price: number
	ready_togouthome: string
	status_search: string
	sub_category: string
	telephone_two: null | string
	togouthome: string
	typework: string
	username: string
	workExp: {
		description_jobs: string
		every_time: boolean
		name_company: string
		start_work_time: string
		stop_work_time: string
		why_jobs: string
	}[]
	years_exp: string
}
export interface ISummary {
	card_noads: cardSummary[]
	has_next_noads: boolean
	has_prev_noads: boolean
	page_noads: number
	status: boolean
	total_page_noads: boolean
}
export interface ICatalogProps {
	card_ads: CardAd[]
	resume?: ISummary
	card_noads: CardAd[]
	has_next_ads: boolean
	has_next_noads: boolean
	page_ads: number
	page: number
	setSubCat: React.Dispatch<React.SetStateAction<string>>
	setCat: React.Dispatch<React.SetStateAction<string>>
	categorys_index: string
	page_noads: number
	stasus: boolean
	categoryForNewCard: string
	underCategoryForNewCard: string

	setPage: React.Dispatch<React.SetStateAction<number>>
	sub_category_all: {
		category: string
		id: number
		cat?: string
		mass?: [{ name: string[]; cat?: string }]
	}[]
	total_pages_ads: number
	total_pages_noads: number
}
export interface ProfileAndInfoProfileProps {
	citys: { label: string; value: string }[]
}
export interface iResult {
	caption: string
	summary?: boolean
	id_card: number
}

export interface Isearch {
	card_results: iResult[]
	inputValue: string
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	res: iResult[]
	setRes: React.Dispatch<React.SetStateAction<iResult[]>>
	styles: React.CSSProperties
}
interface HeaderProps {
	children?: React.ReactNode
	citys: any[]
	setModalType: (value: React.SetStateAction<'auth' | 'reg' | ''>) => void
	setIsOpen: (value: React.SetStateAction<boolean>) => void
	modalType: 'auth' | 'reg' | ''
	City: City | null // updated this line
	setCity: React.Dispatch<React.SetStateAction<City | null>>
	isOpen: boolean
	setCategory: (value: React.SetStateAction<string>) => void
	setUnderCategory: (value: React.SetStateAction<string>) => void
}