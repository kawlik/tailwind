import { FaLightbulb } from 'react-icons/fa';
import { ListItem } from '../components/page/@';
import { BgIcon, Input } from '../components/util/@';

export default function () {
	// component logic

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 overflow-y-scroll px-3 py-1">
			<Input placeholder="Search" type="text" value="" />
			{new Array(15).fill(null).map((item, index) => (
				<ListItem
					action={() => {}}
					id={index.toString()}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
			))}
			<aside className="mt-auto">
				<BgIcon icon={FaLightbulb} />
				<p className="text-center">You can add a new bill</p>
				<p className="text-center">using the button just below!</p>
			</aside>
		</section>
	);
}
