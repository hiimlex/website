import styled from "styled-components";

export const AnimatedTile = styled.div`
	z-index: 5;
	width: 90vmin;
	height: 50vmin;

	position: absolute;
	left: 10%;
	top: 30%;
	background: transparent !important;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const TextTop = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3px;
`;

export const TextBottom = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3px;
`;

export const MainText = styled.span`
	margin-bottom: 12px;
	font-size: 3rem;
	line-height: normal;
	letter-spacing: 0.15rem !important;
	font-weight: bold;
	color: #fff;
	margin: 0;
	line-height: 2rem;

	display: block;

	@media (max-width: 1000px) {
		font-size: 2.2rem;
	}
`;

export const Name = styled.span`
	font-size: 4.4rem;
	line-height: normal;
	font-weight: bold;
	color: #f0c06a;
	margin: 0;

	display: block;

	@media (max-width: 1000px) {
		font-size: 3.2rem;
	}
`;

export const Description = styled.span`
	font-size: 1.2rem;
	color: white;
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

export const SocialsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
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
	gap: 12px;
`;

export const Icon = styled.a`
	width: fit-content;
	height: fit-content;
	margin: 0 12px;
	color: white;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #f0c06a;
	}
`;
