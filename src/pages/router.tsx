import { BrowserRouter, Switch, Route } from "react-router-dom";
import Players from './players';

function Navigate(){
    return (
        <Switch>
            <Route exact path="/" component={Players}/>
        </Switch>
    );
}

export default function Router(){
    return <BrowserRouter><Navigate/></BrowserRouter>;
}