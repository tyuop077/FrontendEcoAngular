import { ProfilePromocode } from '@services/profile-promocodes.service';

export const ProfilePromocodes: ProfilePromocode[] = [
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
