import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Avatar from "../../components/Avatar";
import Carpet from "../../components/Carpet";
import Light from "../../components/Light";
import Phone from "../../components/Phone";
import Pictures from "../../components/Pictures";
import {
	Content,
	DotLine,
	Header,
	Logo,
	Main,
	MainText,
	Navbar,
	NavbarItem,
	Scenario,
	Shadow,
	SocialsText,
	Title,
} from "./styles";

const Home = () => {
	const location = useLocation();

	const handleLocation = () => {
		return location.pathname;
	};

	return (
		<Scenario>
			<Content>
				<Light />

				<Header>
					<Logo>
						<Title>LeUX</Title>
						<Shadow>LeUX</Shadow>
					</Logo>
					<Navbar>
						<NavbarItem active={handleLocation() === "/"}>Me</NavbarItem>
						<NavbarItem active={false}>Portfolio</NavbarItem>
						<NavbarItem active={false}>Contact</NavbarItem>
					</Navbar>
				</Header>

				<Main>
					<MainText>
						Hi my name is
						<br />
						Alex Alves
						<br />
						<DotLine />
						<SocialsText>SOCIALS</SocialsText>
					</MainText>

					<Avatar />
					<Carpet />
					<Pictures />
					<Phone />
				</Main>
			</Content>
		</Scenario>
	);
};

export default Home;
