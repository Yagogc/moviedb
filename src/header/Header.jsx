import React from "react";
import styled from 'styled-components';

const Header = () => (
	<Head>
		<h1>MOVIE<span>DB</span></h1>
	</Head>
)

export default Header;

const Head = styled.header`
	text-align: center;

	h1 {
		text-transform: uppercase;
	}
	span {
		font-weight: bold;
	}
`