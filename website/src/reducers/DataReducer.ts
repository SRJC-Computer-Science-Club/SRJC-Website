import { fromJS } from 'immutable';
import { DO_SOMETHINGS } from '../constants/constants';
import { handleActions } from 'redux-actions';

const initialState = fromJS({});


const DATA_REDUCER = handleActions({

	[DO_SOMETHINGS]: (state, action) => {
		return state;
	}

},                                 initialState);


export default DATA_REDUCER;