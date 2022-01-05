import styled from "styled-components";

export const PhoneStyle = styled.img`
	position: absolute;
	top: 0;
	right: 5%;
	width: 4vw;
	max-width: 60px;
	cursor: pointer;
	z-index: 4;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 0 #ffffff99) drop-shadow(-4px -4px 0 #ffffff99);
	}
`;
