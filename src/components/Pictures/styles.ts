import styled from "styled-components";

export const PicturesStyle = styled.img`
	position: absolute;
	top: 15%;
	left: 20%;
	width: 18vw;
	max-width: 244px;
	z-index: 2;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	filter: drop-shadow(-6px 6px 12px #00000022);

	&:hover {
		filter: drop-shadow(-6px 6px 12px #fffffff2);
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 12px #ffffff22)
			drop-shadow(-4px -4px 12px #ffffff22);
	}

	animation: animationPic 1s;
	animation-fill-mode: forwards;

	@keyframes animationPic {
		0% {
			top: 13%;
			left: 18%;
			opacity: 0;
		}
		100% {
			top: 15%;
			left: 20%;
			opacity: 1;
		}
	}
`;
