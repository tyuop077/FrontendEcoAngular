import { MarketPromocode } from '@services/market-promocodes.service';

export const MarketPromocodes: MarketPromocode[] = [
	{
		expired: false,
		discount: 1000,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	},
	{
		expired: true,
		discount: 100,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	},
	{
		expired: true,
		discount: 400,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	}
]
