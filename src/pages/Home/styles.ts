import styled from "styled-components";

export const Scenario = styled.div`
	width: 100vw;
	height: 100vh;
	background: #323444;
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Header = styled.div`
	width: 100%;
	height: auto;
	padding: 24px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 24px;
`;

export const Content = styled.div`
	width: 1280px;
	height: auto;
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	color: transparent;
	height: fit-content;
`;

export const Title = styled.h1`
	font-size: 3.2rem;
	font-weight: bold;
	color: transparent;
	position: relative;
	-webkit-text-stroke: 2px #f0c06a;
	margin: 0;
`;

export const Shadow = styled.h1`
	font-size: 3.2rem;
	font-weight: bold;
	color: #f0c06a;
	position: absolute;
	animation: wave 4s ease-in-out infinite;
	margin: 0;

	@keyframes wave {
		0%,
		100% {
			clip-path: polygon(
				0% 45%,
				15% 44%,
				32% 50%,
				54% 60%,
				70% 61%,
				84% 59%,
				100% 52%,
				100% 100%,
				0% 100%
			);
		}
		50% {
			clip-path: polygon(
				0% 60%,
				16% 65%,
				34% 66%,
				51% 62%,
				67% 50%,
				84% 45%,
				100% 46%,
				100% 100%,
				0% 100%
			);
		}
	}
`;

export const Navbar = styled.nav`
	height: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	* {
		margin: 0 24px;
	}
`;

export const NavbarItem = styled.span<{ active: boolean }>`
	font-size: 1.2rem;
	cursor: pointer;
	color: #62646b;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #f0c06a;
	}

	${(props) => props.active && `color: #fff;`}
`;

export const Main = styled.main`
	width: 100%;
	padding: 24px;
	position: relative;

	display: flex;
	justify-content: flex-end;
`;

export const MainText = styled.div`
	font-size: 3.8rem;
	letter-spacing: 0.15rem !important;
	font-weight: bold;
	color: #fff;
	margin-left: 80px;
	margin-top: 80px;

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
`;
