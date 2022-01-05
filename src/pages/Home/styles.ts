import styled from "styled-components";

export const Scenario = styled.div`
	width: 100%;
	min-height: 100vh;
	max-height: 1000px;
	height: auto;
	background: #323444;
	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Header = styled.div`
	width: 100%;
	max-width: 1280px;
	height: auto;
	padding: 4px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
`;

export const Content = styled.div`
	width: 1280px;
	height: auto;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	z-index: 1;
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

	${(props) =>
		props.active &&
		`color: #fff; ::after{
		content: "";
		display: block;
		width: 150%s;
		height: 2px;
		background: #f0c06a;
		margin: 0 auto;
	}`}
`;

export const Main = styled.main`
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
	font-size: 3.6rem;
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
	margin-left: 160px;
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

export const Room = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 0;
	overflow: hidden;
`;

export const Square = styled.div`
	width: 100%;
	height: 100%;
	border: 2px solid #ffffff05;
	margin: 0 auto;

	position: absolute;
	left: 0;
	right: 0;

	--nr: 18; /* number of rows */
	--nc: 36; /* number of columns */
	--b: 2px; /* border length */

	background: repeating-linear-gradient(
			to right,
			transparent 0 calc((100% - var(--b) * (var(--nc) - 1)) / var(--nc)),
			#ffffff05 0
				calc((100% - var(--b) * (var(--nc) - 1)) / var(--nc) + var(--b))
		),
		repeating-linear-gradient(
				to bottom,
				transparent 0 calc((100% - var(--b) * (var(--nr) - 1)) / var(--nr)),
				#ffffff05 0
					calc((100% - var(--b) * (var(--nr) - 1)) / var(--nr) + var(--b))
			)
			transparent;
`;

export const ContentRoom = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
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
