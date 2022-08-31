import { IconType } from 'react-icons';

export default function (props: { icon: IconType; label: string; onClick?(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="flex flex-1 flex-col gap-1 items-center overflow-x-hidden p-0.5 active:scale-95"
			onClick={props.onClick}
		>
			<span>
				<props.icon />
			</span>
			<span className="capitalize font-light text-sm text-center">{props.label}</span>
		</button>
	);
}
