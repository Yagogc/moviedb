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
	display: flex;
	height: 80px;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid rebeccapurple;
	h1 {
		font-size: 2rem;
		color: rebeccapurple;
		text-transform: uppercase;
	}
	span {
		font-weight: bold;
	}
`