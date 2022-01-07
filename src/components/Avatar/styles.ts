import styled from "styled-components";

export const AvatarStyle = styled.img`
	position: absolute;
	bottom: 22%;
	width: 26vw;
	max-width: 348px;
	right: 30%;
	z-index: 3;

	transition: all 0.1s ease-in-out;
	filter: drop-shadow(-12px 12px 12px #00000022);

	/* &:hover {
		filter: drop-shadow(-6px 6px 12px #fffffff2);
		-webkit-filter: drop-shadow(4px 4px 0 #ffffff99)
			drop-shadow(-4px -4px 0 #ffffff99);
		filter: drop-shadow(4px 4px 12px #ffffff22)
			drop-shadow(-4px -4px 12px #ffffff22);
	} */

	animation: animationAvatar 1s;
	animation-fill-mode: forwards;

	@keyframes animationAvatar {
		0% {
			right: 32%;
			opacity: 0;
		}
		100% {
			right: 30%;
			opacity: 1;
		}
	}
`;
