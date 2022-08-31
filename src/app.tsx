import { Navigate, Route, Routes } from 'react-router-dom';
import { useAtuhContext } from './contexts/@';
import { ListPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { HomeScreen, SignInScreen, SignUpScreen } from './screens/@';

export default function () {
	// component logic
	const { user } = useAtuhContext();

	// component layout
	return !user ? (
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
