export default function (props: { alt: string; src: string }) {
	// component logic

	// component layout
	return (
		<div className="flex flex-1 p-2">
			<img alt={props.alt} src={props.src} />
		</div>
	);
}
