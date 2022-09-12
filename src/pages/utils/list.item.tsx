import { FaStar } from 'react-icons/fa';
import { AvatarIcon } from '../../components/@';

export default function (props: {
	action(): void;
	id: string;
	participants: string[];
	timestamp: string;
	title: string;
}) {
	// component logic
	const mapedParticipants =
		props.participants.length === 1
			? `Only You`
			: `You, and ${props.participants.length - 1} other${
					props.participants.length >= 2 ? 's' : ''
			  }`;

	// component layout
	return (
		<button className="flex flex-nowrap gap-2 items-center" onClick={props.action}>
			<AvatarIcon icon={FaStar} />
			<div className="flex-1 overflow-hidden">
				<p className="font-bold w-max">{props.title}</p>
				<p className="text-sm w-max">{mapedParticipants}</p>
			</div>
			<span className="font-light italic text-xs w-max">{props.timestamp}</span>
		</button>
	);
}
