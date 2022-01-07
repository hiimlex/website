import styled from "styled-components";

export const CarpetStyle = styled.img`
	position: absolute;
	bottom: 18%;
	right: 24%;
	width: 40vw;
	max-width: 562px;
	z-index: 1;

	filter: drop-shadow(-12px 12px 24px #00000022);

	animation: animationCarpet 1s;
	animation-fill-mode: forwards;

	@keyframes animationCarpet {
		0% {
			bottom: 14%;
			opacity: 0;
		}
		100% {
			bottom: 18%;
			opacity: 1;
		}
	}
`;
