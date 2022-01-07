import styled from "styled-components";

export const AnimatedTile = styled.div`
	z-index: 4;
	width: 90vmin;
	height: 50vmin;

	position: absolute;
	left: 10%;
	top: 30%;
	background: transparent !important;
`;

export const TextTop = styled.div`
	@keyframes showTopText {
		0% {
			transform: translate3d(0, 100%, 0);
		}
		40% {
			transform: translate3d(0, 70%, 0);
		}
		60% {
			transform: translate3d(0, 40%, 0);
		}
		80% {
			transform: translate3d(0, 20%, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	height: 65%;
	overflow: hidden;
	position: absolute;
	width: 100%;
	top: 0;

	div {
		position: absolute;
		animation: showTopText 1.4s;
		animation-delay: 0.5s;
		animation-fill-mode: forwards;
		bottom: 0;
		transform: translate(0, 100%);
	}
`;

export const TextBottom = styled.div`
	@keyframes showBottomText {
		0% {
			transform: translate3d(0, -100%, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	bottom: 0;
	height: 35%;
	overflow: hidden;
	position: absolute;
	width: 100%;

	div {
		animation: showBottomText 0.5s;
		animation-delay: 1.75s;
		animation-fill-mode: forwards;
		top: 0;
		transform: translate(0, -100%);
	}
`;

export const MainText = styled.p`
	margin-bottom: 24px;
	font-size: 3.4rem;
	line-height: normal;
	letter-spacing: 0.15rem !important;
	font-weight: bold;
	color: #fff;
	margin: 0;
`;

export const Description = styled.span`
	font-size: 1.2rem;
	color: #62646b;
	margin-bottom: 24px;
	font-weight: 500;
`;

export const DotLine = styled.div`
	width: 32px;
	height: 6px;
	background: #f0c06a;
	margin: 24px 0;

	position: relative !important;
`;

export const SocialsText = styled.span`
	text-transform: uppercase;
	font-size: 1.8rem;
	font-weight: 400;
	color: #fff;
	letter-spacing: 0.2rem;
	line-height: 2.8rem;
`;

export const SocialsIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	margin-top: 12px;
`;

export const Icon = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 0 12px;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #f0c06a;
	}
`;
