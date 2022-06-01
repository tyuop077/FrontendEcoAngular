import { MarketItem } from '@services/market.service';

export class MarketPreviewGenerator {
	static generateMarketLabel(data: MarketItem) {
		return this.addPluralizedGender(this.addPluralizedGender(this.getTypeName(data.type)), data.gender)
	}
	static getTypeName(type: string) {
		return {"CLOTHES": "Одежда", "SHOES": "Обувь", "ACCESSORIZE": "Аксессуары",
			"FURNITURE": "Мебель", "DISHES": "Посуда"}[type] ?? `"${type}"`
	}
	static addPluralizedGender(item: string, gender?: "MAN" | "WOMAN" | "") {
		switch (gender) {
			case "MAN": return `Мужская ${item.toLowerCase()}`;
			case "WOMAN": return `Женская ${item.toLowerCase()}`
			default: return item
		}
	}
}
