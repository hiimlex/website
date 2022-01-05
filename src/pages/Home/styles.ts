import styled from "styled-components";

export const Scenario = styled.div`
	width: 100%;
	min-height: 100vh;
	max-height: 1000px;
	height: auto;
	background: #323444;
	color: #fff;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Content = styled.div`
	width: 1280px;
	height: auto;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	z-index: 1;

	@media only screen and (max-width: 1280px) {
		width: 90%;
	}
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

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background: #0000004d;
	z-index: 9;
`;
