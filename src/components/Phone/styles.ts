import styled from "styled-components";

export const PhoneStyle = styled.img`
	position: absolute;
	top: 20%;
	right: 2%;
	width: 4vw;
	max-width: 60px;
	cursor: pointer;
	z-index: 4;
	transition: all 0.1s ease-in-out;

	filter: drop-shadow(-12px 12px 12px #00000022);

	&:hover {
		filter: drop-shadow(-6px 6px 12px #fffffff2);
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 12px #ffffff22)
			drop-shadow(-4px -4px 12px #ffffff22);
	}

	animation: animationPhone 1s;
	animation-fill-mode: forwards;

	@keyframes animationPhone {
		0% {
			top: 18%;
			right: 3%;
			opacity: 0;
		}
		100% {
			top: 20%;
			right: 5%;
			opacity: 1;
		}
	}
`;
