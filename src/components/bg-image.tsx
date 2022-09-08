export default function (props: { alt: string; src: string }) {
	// component logic

	// component layout
	return (
		<img
			alt={props.alt}
			src={props.src}
			style={{
				aspectRatio: '1 / 1',
				maxHeight: '100%',
				width: 'min-content',
			}}
		/>
	);
}
