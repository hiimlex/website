import styled from "styled-components";

export const LightStyle = styled.img`
	position: absolute;
	top: 0;
	margin: 0 auto;
	left: 0;
	right: 0;
	width: 10vw;
	max-width: 162px;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(1px 1px 0 #ffffff99)
			drop-shadow(-1px -1px 0 #ffffff99);
		filter: drop-shadow(2px 2px 0 #ffffff99) drop-shadow(-2px -2px 0 #ffffff99);
	}
`;
