import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { ListItem } from '../components/page/@';
import { BgIcon, Input } from '../components/util/@';
import { ListService } from '../services/@';
import { ListItemType } from '../types/@';

export default function () {
	// component logic
	const [list, setList] = useState<ListItemType[]>([]);

	// update state
	useEffect(() => {
		ListService.list$.subscribe((list) => setList(list));
	}, []);

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 overflow-y-scroll px-3 py-1">
			<Input placeholder="Search" type="text" value="" />
			{list.map((item) => (
				<ListItem
					action={() => {}}
					id={item.id}
					key={item.id}
					participants={item.participants}
					timestamp={item.timestamp.toDate().toLocaleDateString()}
					title={item.title}
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
