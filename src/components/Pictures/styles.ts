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
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 0 #ffffff99) drop-shadow(-4px -4px 0 #ffffff99);
	}
`;
