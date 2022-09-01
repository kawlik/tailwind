import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BillInput, BillItem } from '../components/page/@';
import { BillService } from '../services/@';
import { BillType } from '../types/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = useParams();

	// create state
	const [bill, setBill] = useState<BillType | null>(null);

	// update state
	useEffect(() => {
		const unregister = BillService.unregister(pathname['billID']!);

		BillService.data$.subscribe((bill) => setBill(bill));

		return unregister;
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
