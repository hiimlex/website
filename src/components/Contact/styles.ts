import styled from "styled-components";

export const Container = styled.div<{ fade: boolean }>`
	width: calc(100% - 64px);
	height: 240px;
	background: #282536;
	color: #fff;

	position: absolute;
	bottom: 0;

	z-index: 12;

	box-shadow: 0 0 24px 120px rgba(40, 37, 54, 0.2);
	border-top-left-radius: 36px;
	border-top-right-radius: 36px;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	animation: fade-in 0.3s linear;

	${({ fade }) => fade && `animation: fade-out 0.3s linear;`}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
`;

export const InfoContent = styled.div`
	position: relative;

	width: 100%;
	max-width: 1280px;
	display: flex;
`;

export const Close = styled.div`
	position: absolute;
	width: fit-content;
	height: fit-content;
	top: 24px;
	right: 24px;
	color: #fff;
	cursor: pointer;
`;

export const FormContent = styled.div`
	margin-left: 20%;
	width: auto;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const Input = styled.input`
	border: 1px solid #fff;
	height: 28px;
	min-height: 28px;
	max-height: 28px;
	padding: 4px 12px;

	font-size: 0.8rem;

	background: transparent;
	color: white;
	outline: none;

	min-width: 240px;
`;

export const Button = styled.button`
	margin: 0 8px;
	height: 38px;
	min-height: 28px;
	max-height: 38px;
	padding: 4px 12px;

	font-size: 1rem;
	line-height: 1.4rem;
	font-weight: 500;
	font-family: "Poppins";
	letter-spacing: 0.2rem;
	text-transform: uppercase;

	background: transparent;
	border: 1px solid #fff;
	color: #fff;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #fff;
		color: #282536;
	}
`;

export const Title = styled.h1`
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 1.4rem;
	margin: 8px 0;
`;

export const SubTitle = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.4rem;
	color: #62646b;
	margin: 8px 0;
	margin-bottom: 24px;
`;

export const DotNotation = styled.div`
	width: 2rem;
	height: 6px;
	background: #f0c06a;

	margin: 12px 0;
`;

export const GroupRow = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const Link = styled.span`
	color: #6f48e2;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		text-decoration: underline;
	}
`;
