import { FaDollarSign } from 'react-icons/fa';
import { BtnIcon, Collapse, StampIcon } from '../util/@';

export default function (props: {
	payload: string;
	timestamp: string;
	type: string;
	user: string;
}) {
	// component logic
	const isMine = !Math.round(Math.random());

	// component layout
	return (
		<div className="flex flex-nowrap gap-2">
			{isMine ? <div className="w-8 mt-auto" /> : <StampIcon icon={FaDollarSign} />}
			<div className={`mt-auto ${isMine ? 'ml-auto' : 'mr-auto'}`}>
				<p className="bg-gray-400 bg-opacity-20 p-2 rounded-md">{props.payload}</p>
			</div>
			{isMine ? <StampIcon icon={FaDollarSign} /> : <div className="w-8 mt-auto" />}
		</div>
	);
}
