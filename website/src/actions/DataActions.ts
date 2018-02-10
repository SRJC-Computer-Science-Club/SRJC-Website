import { Action, Dispatch } from 'redux';


export const doSomething = (): Action => {

	return {
		type: 'hello'
	};

};

export const doAnAction = (dispatch: Dispatch<Action>, getState: Function) => {

	dispatch(doSomething());

};

