import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { List_Item } from './utils/@';
import { BgIcon, Input } from '../components/@';
import { useContexts } from '../contexts/@';
import { BillListService } from '../services/@';
import { BillInfoType } from '../types/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();

	// dataset
	const myPhone = contexts.user.get()?.phoneNumber || '';

	// create state
	const [list, setList] = useState<BillInfoType[]>([]);
	const [only, setOnly] = useState('');

	// update state
	useEffect(() => {
		BillListService.subscribeOn(myPhone).subscribe((list) =>
			setList(list.sort(BillListService.sort)),
		);

		return () => BillListService.unsubscribe();
	}, []);

	// actions
	const openBill = (bill: BillInfoType) => () => navigate(`/bill/${bill.id}/`);
	const includes = (bill: BillInfoType) =>
		bill.title.toUpperCase().includes(only.toLocaleUpperCase());

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 overflow-y-scroll px-3 py-1">
			<Input onChange={setOnly} placeholder="Search" type="text" value={only} />
			{list.filter(includes).map((item) => (
				<List_Item
					action={openBill(item)}
					id={item.id!}
					key={item.id}
					participants={item.participants}
					timestamp={item.timestampUpdated.toDate().toLocaleDateString()}
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
