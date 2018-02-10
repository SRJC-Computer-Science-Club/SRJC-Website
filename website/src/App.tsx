import * as React from "react";
import { connect } from "react-redux";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					penis
				</div>
			</div>
		);
	}
}

export default connect((state) => ({}), (dispatch) => ({}))(App);
