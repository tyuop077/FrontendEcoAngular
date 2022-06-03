import { ProfilePromocode } from '@services/profile-promocodes.service';

export const ProfilePromocodes: ProfilePromocode[] = [
	{
		valid: true,
		discount: 1000,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	},
	{
		valid: false,
		discount: 100,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	},
	{
		valid: false,
		discount: 400,
		date: "25.09.2021",
		link: "adidas.com/clothes/%"
	}
]
