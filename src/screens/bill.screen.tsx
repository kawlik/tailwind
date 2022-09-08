import { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BarHeader } from '../components/@';
import { useContexts } from '../contexts/@';
import { BillInfoService } from '../services/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();
	const pathname = useParams();

	console.log(pathname);

	// update context
	useEffect(() => {
		BillInfoService.subscribeOn(pathname['billID']!).subscribe((bill) =>
			contexts.bill.set(bill),
		);

		return () => BillInfoService.unsubscribe();
	}, []);

	// dataset
	const billTitle = contexts.bill.get()?.title || 'Bill';

	// actions
	const goBack = () => navigate(-1);

	// component layout
	return (
		<>
			<BarHeader
				actionL={goBack}
				iconL={FaArrowLeft}
				iconR={FaArrowRight}
				label={billTitle}
				skipR={true}
			/>
			<Outlet />
		</>
	);
}
