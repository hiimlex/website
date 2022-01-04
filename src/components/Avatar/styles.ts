import styled from "styled-components";

export const AvatarStyle = styled.img`
	position: absolute;
	top: 0;
	width: 30%;
	left: 20%;
	cursor: pointer;
	z-index: 1;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(1px 1px 0 #ffffff88)
			drop-shadow(-1px -1px 0 #ffffff88);
		filter: drop-shadow(2px 2px 0 #ffffff88) drop-shadow(-2px -2px 0 #ffffff88);
	}
`;
