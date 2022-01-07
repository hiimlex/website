import styled from "styled-components";

export const LightStyle = styled.img`
	position: absolute;
	top: 0;
	margin: 0 auto;
	left: 0;
	right: 0;
	width: 10%;
	min-width: 88px;
	max-width: 162px;

	filter: drop-shadow(-12px 12px 12px #00000022);

	/* cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 0 #ffffff99) drop-shadow(-4px -4px 0 #ffffff99);
	} */

	animation: animationLight 1s;
	animation-fill-mode: forwards;

	@keyframes animationLight {
		0% {
			top: -10%;
			opacity: 0;
		}
		100% {
			top: 0;
			opacity: 1;
		}
	}
`;
