export interface CardAdResponse {
	status?: boolean
	card_ads_1: CardAd[]
	card_ads_2: CardAd[]
	card_no_ads_1: CardAd[]
	card_no_ads_2: CardAd[]
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

export interface ICatalogProps {
	card_ads: CardAd[]
	card_noads: CardAd[]
	has_next_ads: boolean
	has_next_noads: boolean
	page_ads: number
	categorys_index: number
	page_noads: number
	stasus: boolean
	setPage: React.Dispatch<React.SetStateAction<number>>
	sub_category_all: { category: string; id: number }[]
	total_pages_ads: number
	total_pages_noads: number
}

