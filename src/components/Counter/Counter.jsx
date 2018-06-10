import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
	constructor() {
		super();

		this.incrementAsync = this.incrementAsync.bind(this);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

	incrementIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000);
	}

	render() {
		const { value, onIncrement, onDecrement } = this.props;
		return (
			<div>
				<div>Clicked: {value} times</div>
				<div>
					<button onClick={onIncrement}>+</button>
					<button onClick={onDecrement}>-</button>
					<button onClick={this.incrementIfOdd}>奇数增加</button>
					<button onClick={this.incrementAsync}>异步增加</button>
				</div>
			</div>
		);
	}
}

const mapStateToProp = state => {
	return {
		value: state.counter.count
	};
};

export default connect(mapStateToProp)(Counter);
