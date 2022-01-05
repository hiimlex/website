import styled from "styled-components";

export const PhoneStyle = styled.img`
	position: absolute;
	top: -5%;
	right: 0;
	width: 4vw;
	max-width: 60px;
	cursor: pointer;
	z-index: 2;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(1px 1px 0 #ffffff99)
			drop-shadow(-1px -1px 0 #ffffff99);
		filter: drop-shadow(2px 2px 0 #ffffff99) drop-shadow(-2px -2px 0 #ffffff99);
	}
`;
