import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/website" component={Home} />
				<Redirect from="/" to="/website" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
