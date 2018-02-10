import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { Store, history } from "./app/store";
import { ConnectedRouter } from "react-router-redux";

ReactDOM.render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>
	,
	document.getElementById("root") as HTMLElement
);
registerServiceWorker();
