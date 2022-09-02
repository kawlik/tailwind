import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BillInput, BillItem } from '../components/page/@';
import { BillService } from '../services/@';
import { BillDataType } from '../types/@';

export default function () {
	// component logic
	const pathname = useParams();

	// create state
	const [bill, setBill] = useState<BillDataType | null>(null);

	// update state
	useEffect(() => {
		BillService.subscribeOn(pathname['billID']!).subscribe((bill) => setBill(bill));

		return BillService.unsubscribe;
	}, []);

	// component layout
	return (
		<>
			<ul className="flex flex-1 flex-col-reverse gap-2 overflow-y-scroll px-3">
				{bill?.posts.map((bill, index) => (
					<BillItem
						key={index}
						payload={bill.payload}
						timestamp={bill.timestamp.toDate().toLocaleDateString()}
						type={bill.type}
						user={bill.user}
					/>
				))}
			</ul>
			<BillInput />
		</>
	);
}
