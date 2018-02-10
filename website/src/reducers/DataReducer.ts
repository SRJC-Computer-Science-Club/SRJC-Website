import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { default as Action, TypeKeys } from "../constants/constants";
import { DataActions } from "../actions/DataActions";

const initialState = fromJS({});


const DataReducer = handleActions({

	[TypeKeys.DO_SOMETHING]: (state, action: Action<DataActions>) => {
		console.log(action.type)
		return state
	},
	[TypeKeys.DO_NOTHING] : (state, action: Action<DataActions>) => {
		console.log(action.type)
		return state
	}


},                                initialState);


export default DataReducer;

