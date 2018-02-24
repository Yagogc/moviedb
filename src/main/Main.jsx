
import React from "react";
import Navigation from "./Navigation";
import Movies from "./Movies";

class Main extends React.Component {
	render() {
		return (
		<section>
			<Navigation />
			<Movies />
		</section>
		)
	}
}

export default Main;