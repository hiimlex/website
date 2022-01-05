import styled from "styled-components";

export const AvatarStyle = styled.img`
	position: absolute;
	bottom: 5%;
	width: 26vw;
	max-width: 348px;
	right: 30%;
	cursor: pointer;
	z-index: 2;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 0 #ffffff99) drop-shadow(-4px -4px 0 #ffffff99);
	}
`;
