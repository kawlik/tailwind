import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BarHeader } from '../components/common/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();
    const pathname = useParams();

	// dataset
	const billTitle = pathname['billID'] || '';

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
