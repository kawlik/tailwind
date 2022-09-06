// define service
class PostService {
	convertToE164(phone: string): string {
		return `+48${phone.replaceAll('-', '')}`;
	}

	isValidPhoneNumber(value: string): boolean {
		return !!value.match(/\d{3}-\d{3}-\d{3}/)?.length;
	}

	parseToPhoneNumber(input: string): string {
		if (input.length <= 3 && !input.includes('-')) return input;

		if (input.length <= 7 && !input.includes('-'))
			return input.slice(0, 3) + '-' + input.slice(3, 6);
		if (input.length <= 9 && !input.includes('-'))
			return input.slice(0, 3) + '-' + input.slice(3, 6) + '-' + input.slice(6, 9);

		if (input.length === 8) {
			const split = input.split('-');

			if (split[0].length !== 3) return input;
			if (split[1].length !== 4) return input;

			return input.slice(0, 7) + '-' + input.slice(7, 8);
		}

		return input.slice(0, 11);
	}
}

// export service
export default new PostService();
