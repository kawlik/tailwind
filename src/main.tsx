import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// app providers
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

// app stylesheet
import './style.css';
import { AppProvider } from './contexts/@';

// app initialization
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</AppProvider>
	</React.StrictMode>,
);

// app service worker
registerSW({
	onNeedRefresh() {},
	onOfflineReady() {},
});
