import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListItem } from '../components/page/@';
import { BgIcon, Input } from '../components/util/@';
import { ListService } from '../services/@';
import { ListType } from '../types/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// create state
	const [list, setList] = useState<ListType[]>([]);

	// update state
	useEffect(() => {
		const unregister = ListService.unregister('User 1');

		ListService.data$.subscribe((list) => setList(list));

		return unregister;
	}, []);

	// actions
	const openBill = (billID: string) => () => navigate(`/bill/${billID}`);

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 overflow-y-scroll px-3 py-1">
			<Input placeholder="Search" type="text" value="" />
			{list.map((item) => (
				<ListItem
					action={openBill(item.id)}
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
