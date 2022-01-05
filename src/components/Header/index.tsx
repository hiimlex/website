import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { navigateToUrl } from "../../utils/navigateToUrl";
import Light from "../Light";
import {
	HeaderContent,
	Logo,
	Navbar,
	NavbarItem,
	Shadow,
	Title,
} from "./styles";

const Header = () => {
	const location = useLocation();

	const handleLocation = () => {
		return location.pathname.split("/");
	};

	return (
		<HeaderContent>
			<Logo>
				<Title>LeUX</Title>
				<Shadow>LeUX</Shadow>
			</Logo>

			<Light />

			<Navbar>
				<NavbarItem active={handleLocation().includes("website")}>
					Me
				</NavbarItem>
				<NavbarItem
					active={false}
					onClick={() => navigateToUrl("https://hiimlex.github.io/portfolio")}
				>
					Portfolio
				</NavbarItem>
			</Navbar>
		</HeaderContent>
	);
};

export default Header;
