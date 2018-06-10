import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./../../components/Counter";

class Home extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<div>
				<h2>Home</h2>
				<Counter
					onIncrement={() => {
						dispatch({ type: "counter/INCREMENT" });
					}}
					onDecrement={() => {
						dispatch({ type: "counter/DECREMENT" });
					}}
				/>
			</div>
		);
	}
}

export default connect(state => state)(Home);
