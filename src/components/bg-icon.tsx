import { IconType } from 'react-icons';

export default function (props: { icon: IconType }) {
	// component logic

	// component layout
	return (
		<div className="flex flex-1 max-h-24 p-2">
			<span className="m-auto text-4xl text-center text-gray-400 text-opacity-75">
				<props.icon />
			</span>
		</div>
	);
}
