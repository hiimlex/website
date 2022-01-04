import styled from "styled-components";

export const PicturesStyle = styled.img`
	position: absolute;
	top: -10%;
	left: 20%;
	width: 18%;
	z-index: 0;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(2px 2px 0 #ffffff88)
			drop-shadow(-2px -2px 0 #ffffff88);
		filter: drop-shadow(3px 3px 0 #ffffff88) drop-shadow(-3px -3px 0 #ffffff88);
	}
`;
