import { INCREMENT, DECREMENT, RESET } from "../actions/counter";

/*
 * 初始化state
 */
const initState = {
	count: 0
};

/*
 * reducer
 */
function reducer(state = initState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1
			};

		case DECREMENT:
			if (state.count > 0) {
				return {
					count: state.count - 1
				};
			}

			return {
				count: 0
			};

		case RESET:
			return { count: 0 };

		default:
			return state;
	}
}

export default reducer;
