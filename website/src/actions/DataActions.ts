import { Action, Dispatch } from "redux";
import { TypeKeys } from "../constants/constants";




export const doSomething = (): Action => {

	return {
		type: TypeKeys.DO_SOMETHING
	};

};

export interface DoNothingAction {
	type: TypeKeys.DO_NOTHING;
	payload: {
		data: string
	}
}

export const doNothing = (payload: string): DoNothingAction => {
	return {
		type: TypeKeys.DO_NOTHING,
		payload: {
			data: payload
		}
	}
}

export const doAnAction = (dispatch: Dispatch<Action>, getState: Function) => {
	dispatch(doSomething());
};


export type DataActions = DoNothingAction | Action