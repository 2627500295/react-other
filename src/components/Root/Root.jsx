import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./../../redux/store";

import { Router } from "react-router-dom";
import history from "./../../utils/history";

import Nav from "./../Nav";
import Routes from "./../../routes";

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<div>
						<Nav />
						<Routes />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default Root;
