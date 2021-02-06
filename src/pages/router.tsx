import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Players from './players';
import Game from './game';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Players} />
				<Route path='/game' component={Game} />
			</Switch>
		</BrowserRouter>
	);
}
