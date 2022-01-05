import styled from "styled-components";

export const HeaderContent = styled.div`
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

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	color: transparent;
	height: fit-content;

	padding: 12px 24px;
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
