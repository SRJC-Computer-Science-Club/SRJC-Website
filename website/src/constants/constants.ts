export enum TypeKeys {
	DO_SOMETHING = "HULLO",
	DO_NOTHING= "DO_NOTHING"
}


interface Action<T> {
	type: string;
	payload: T;
	error?: boolean;
}

export default Action;

