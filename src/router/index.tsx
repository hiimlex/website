import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/website" component={Home} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
