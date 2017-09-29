export default (state = null, action) => {
	switch (action.type) {			//this is a boilerplate for all types of actions
		case 'select_library':
			return action.payload;
		default: 					//to be sure state is not 'undefined' (it will throw an error)
			return state;			//return to previous state
	}
};