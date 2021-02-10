import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/app';
import store from './store';

render(
	<StrictMode>
		<Provider store={store}>
			<App />	
		</Provider>		
	</StrictMode>,
	document.querySelector('#root')
);
