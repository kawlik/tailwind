import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BarHeader } from '../components/common/@';
import { useContexts } from '../contexts/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();
	const pathname = useParams();

	// dataset
	const billTitle = contexts.bill.get()?.title || pathname['billID'] || '';

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
