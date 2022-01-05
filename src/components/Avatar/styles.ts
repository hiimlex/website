import styled from "styled-components";

export const AvatarStyle = styled.img`
	position: absolute;
	bottom: 5%;
	width: 26vw;
	max-width: 348px;
	right: 16%;
	cursor: pointer;
	z-index: 2;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(1px 1px 0 #ffffff99)
			drop-shadow(-1px -1px 0 #ffffff99);
		filter: drop-shadow(2px 2px 0 #ffffff99) drop-shadow(-2px -2px 0 #ffffff99);
	}
`;
