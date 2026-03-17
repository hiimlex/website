import styled from "styled-components";

export const GuitarsStyles = styled.img`
	position: absolute;
	bottom: 20%;
	right: 5%;
	width: 22vw;
	max-width: 308px;

	z-index: 4;

	filter: drop-shadow(-12px 12px 12px #00000022);

	animation: animationGuitar 1s;
	animation-fill-mode: forwards;

	@keyframes animationGuitar {
		0% {
			bottom: 18%;
			right: 3%;
			opacity: 0;
		}
		100% {
			bottom: 20%;
			right: 5%;
			opacity: 1;
		}
	}

	@media (max-width: 1000px) {
		width: 200px;
		bottom: 15%;
		right: -5% !important;
	}
`;
