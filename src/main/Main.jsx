
import React from "react";
import Navigation from "./Navigation";
import Movies from "./Movies";
import styled from "styled-components";
class Main extends React.Component {
	render() {
		return (
		<Section>
			<Navigation />
			<Movies />
		</Section>
		)
	}
}

export default Main;

const Section = styled.section`
display: flex;

`