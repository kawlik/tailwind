export default interface Contacts {
	contacts?: {
		select(
			props: ['name', 'tel'],
			opts: {
				multiple: boolean;
			},
		): Promise<
			{
				name: string[];
				tel: string[];
			}[]
		>;
	};
}
