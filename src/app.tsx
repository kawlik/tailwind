import { Navigate, Route, Routes } from 'react-router-dom';
import { useContexts } from './contexts/@';
import { BillPage, ListPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { BillScreen, HomeScreen, SignInScreen, SignUpScreen } from './screens/@';

export default function () {
	// component logic
	const context = useContexts();

	// component layout
	return !context.user ? (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="signin" />} />

			{/* auth utils screen */}
			<Route path="signin" element={<SignInScreen />} />
			<Route path="signup" element={<SignUpScreen />} />
		</Routes>
	) : (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="list" />} />

			{/* bill screen */}
			<Route path="bill" element={<BillScreen />}>
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
