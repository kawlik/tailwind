export default interface Contacts {
	contacts?: {
		select(
			props: ['tel'],
			opts: {
				multiple: boolean;
			},
		): Promise<
			{
				tel: string[];
			}[]
		>;
	};
}
