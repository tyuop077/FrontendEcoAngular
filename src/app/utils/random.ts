export class Random {
	static string(length: number) {
		let str = "";
		while (str.length < length) {
			str += (Math.random() * 36 | 0).toString(36)
		}
		return str
	}
}
