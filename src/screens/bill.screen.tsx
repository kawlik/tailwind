import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BarHeader } from '../components/common/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// actions
	const goBack = () => navigate(-1);

	// component layout
	return (
		<>
			<BarHeader
				actionL={goBack}
				iconL={FaArrowLeft}
				iconR={FaArrowRight}
				label={'Title'}
				skipR={true}
			/>
			<Outlet />
		</>
	);
}
