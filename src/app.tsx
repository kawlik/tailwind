import { Navigate, Route, Routes } from 'react-router-dom';
import { useContexts } from './contexts/@';
import { BillAddPage, BillPage, ListPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { BillScreen, HomeScreen, OTPCreateScreen, OTPVerifyScreen } from './screens/@';

export default function () {
	// component logic
	const contexts = useContexts();

	// component layout
	return !contexts.auth ? (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="otp-create" />} />

			{/* auth utils screen */}
			<Route path="otp-create" element={<OTPCreateScreen />} />
			<Route path="otp-verify" element={<OTPVerifyScreen />} />
		</Routes>
	) : (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="list" />} />

			{/* bill screen */}
			<Route path="bill" element={<BillScreen />}>
				<Route path="add-new" element={<BillAddPage />} />
				<Route path=":billID" element={<BillPage />} />
			</Route>

			{/* home screen */}
			<Route path="*" element={<HomeScreen />}>
				<Route path="list" element={<ListPage />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="reports" element={<ReportsPage />} />
			</Route>
		</Routes>
	);
}
