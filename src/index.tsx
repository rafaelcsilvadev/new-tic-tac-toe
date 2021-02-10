import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './pages/app';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.querySelector('#root')
);
