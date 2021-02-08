import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './pages/app';
import { Provider } from 'react-redux';
import store from './store';

render(
	<StrictMode>
		<Provider store={store}>
			<App />	
		</Provider>		
	</StrictMode>,
	document.querySelector('#root')
);
