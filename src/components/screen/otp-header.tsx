import { BgImage } from '../util/@';

export default function (props: { alt: string; image: string; label: string }) {
	// component logic

	// component layout
	return (
		<section className="flex flex-1 flex-col justify-center p-3">
			<BgImage alt={props.alt} src={props.image} />
			<p className="text-center">{props.label}</p>
		</section>
	);
}
