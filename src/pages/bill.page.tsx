import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bill_Chat, Bill_Item } from './utils/@';
import { BillDataService } from '../services/@';
import { BillDataType } from '../types/@';

export default function () {
	// component logic
	const pathname = useParams();

	// create state
	const [bill, setBill] = useState<BillDataType | null>(null);

	// update state
	useEffect(() => {
		BillDataService.subscribeOn(pathname['billID']!).subscribe((bill) => setBill(bill));

		return () => BillDataService.unsubscribe();
	}, []);

	// component layout
	return (
		<>
			<ul className="flex flex-1 flex-col-reverse gap-2 overflow-y-scroll pb-2 px-3">
				{bill?.posts.map((bill, index) => (
					<Bill_Item
						key={index}
						order={index}
						payload={bill.payload}
						timestamp={bill.timestamp.toDate().toLocaleDateString()}
						type={bill.type}
						user={bill.user}
					/>
				))}
			</ul>
			<Bill_Chat />
		</>
	);
}
