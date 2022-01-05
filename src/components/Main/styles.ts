import styled from "styled-components";

export const MainContainer = styled.main`
	width: 100%;
	padding: 24px;
	position: relative;
	height: fit-content;
	margin-top: 2vw;

	display: flex;
	justify-content: flex-start;
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

export const MainContent = styled.div`
	margin-left: 120px;
	margin-top: 18px;

	z-index: 4;
`;

export const DotLine = styled.div`
	width: 32px;
	height: 6px;
	background: #f0c06a;
	margin: 24px 0;
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
