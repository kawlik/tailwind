import { IconType } from 'react-icons';

export default function (props: { icon: IconType; onClick?(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="bg-gray-400 bg-opacity-20 flex-1 p-2 rounded-full active:scale-95"
			onClick={props.onClick}
		>
			<props.icon className="mx-auto my-auto text-xl" />
		</button>
	);
}
