import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	let token = localStorage.getItem("token");
	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					token ? <Component {...props} /> : <Redirect to="/" />
				}
			/>
		</div>
	);
};

export default PrivateRoute;