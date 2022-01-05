import styled from "styled-components";

export const PicturesStyle = styled.img`
	position: absolute;
	top: -15%;
	left: 23%;
	width: 18vw;
	max-width: 244px;
	z-index: 1;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(2px 2px 0 #ffffff99)
			drop-shadow(-2px -2px 0 #ffffff99);
		filter: drop-shadow(3px 3px 0 #ffffff99) drop-shadow(-3px -3px 0 #ffffff99);
	}
`;


