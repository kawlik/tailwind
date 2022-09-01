import {
	FaArrowLeft,
	FaBell,
	FaPaperclip,
	FaSignOutAlt,
	FaUser,
	FaWallet,
} from 'react-icons/fa';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BarFooter, BarHeader } from '../components/common/@';
import { AuthService } from '../services/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = useParams();

	// dataset
	const activePage = pathname['*'] || '';

	// actions
	const goCreateNewList = () => {};

	// component layout
	return (
		<>
			<BarHeader
				actionR={AuthService.logout}
				iconL={FaArrowLeft}
				iconR={FaSignOutAlt}
				label={activePage}
				skipL={true}
			/>
			<Outlet />
			<BarFooter
				actionAdd={goCreateNewList}
				icons={[FaWallet, FaBell, FaPaperclip, FaUser]}
				pages={['list', 'news', 'reports', 'profile']}
			/>
		</>
	);
}