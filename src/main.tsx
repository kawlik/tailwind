import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// app providers
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

// app stylesheet
import './style.css';
import { AtuhProvider } from './contexts/@';

// app initialization
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AtuhProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</AtuhProvider>
	</React.StrictMode>,
);

// app service worker
registerSW({
	onNeedRefresh() {},
	onOfflineReady() {},
});
