import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ListItem } from '../components/page/@';
import { BgIcon, Input } from '../components/util/@';
import { useContexts } from '../contexts/@';
import { BillInfoService } from '../services/@';
import { BillInfoType } from '../types/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();

	// dataset
	const myPhone = contexts.user.get()?.phoneNumber || '';

	// create state
	const [list, setList] = useState<BillInfoType[]>([]);

	// update state
	useEffect(() => {
		BillInfoService.subscribeOn(myPhone).subscribe((list) => setList(list));

		return () => BillInfoService.unsubscribe();
	}, []);

	// actions
	const openBill = (bill: BillInfoType) => () => {
		contexts.bill.set(bill);
		navigate(`/bill/${bill.id}/`);
	};

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 overflow-y-scroll px-3 py-1">
			<Input placeholder="Search" type="text" value="" />
			{list.map((item) => (
				<ListItem
					action={openBill(item)}
					id={item.id!}
					key={item.id}
					participants={item.participants}
					timestamp={item.timestampCreated.toDate().toLocaleDateString()}
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
