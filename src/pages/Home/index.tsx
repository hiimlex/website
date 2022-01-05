import React from "react";
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTwitch,
	BsTwitter,
} from "react-icons/bs";
import { useLocation } from "react-router";
import Avatar from "../../components/Avatar";
import Carpet from "../../components/Carpet";
import Light from "../../components/Light";
import Phone from "../../components/Phone";
import Pictures from "../../components/Pictures";
import { navigateToUrl } from "../../utils/navigateToUrl";
import useWindowSize from "../../utils/useWindowSize";
import {
	Content,
	Description,
	DotLine,
	Header,
	Icon,
	Logo,
	Main,
	MainContent,
	MainText,
	Navbar,
	NavbarItem,
	Room,
	Scenario,
	Shadow,
	SocialsIcons,
	SocialsText,
	Square,
	Title,
} from "./styles";

type Socials = "github" | "instagram" | "linkedin" | "twitch" | "twitter";

const Home = () => {
	const location = useLocation();
	const width = useWindowSize()[0];

	const handleLocation = () => {
		return location.pathname;
	};

	const openCreativePortfolio = () => {
		navigateToUrl("https://hiimlex.github.io/portfolio");
	};

	const handleSocialNav = (social: Socials) => {
		switch (social) {
			case "github":
				navigateToUrl("https://github.com/hiimlex");
				break;
			case "instagram":
				navigateToUrl("https://www.instagram.com/alcquis/");
				break;
			case "linkedin":
				navigateToUrl("https://www.linkedin.com/in/alex-rodrigues-83558718b/");
				break;
			case "twitch":
				navigateToUrl("https://www.twitch.tv/wastedyuno");
				break;
			case "twitter":
				navigateToUrl("https://twitter.com/wastedyuno");
				break;
			default:
				return;
		}
	};

	return (
		<>
			{width > 768 ? (
				<Scenario>
					<Room>
						<Square></Square>
					</Room>
					<Content>
						<Header>
							<Logo>
								<Title>LeUX</Title>
								<Shadow>LeUX</Shadow>
							</Logo>

							<Light />

							<Navbar>
								<NavbarItem active={handleLocation() === "/website"}>
									Me
								</NavbarItem>
								<NavbarItem active={false} onClick={openCreativePortfolio}>
									Portfolio
								</NavbarItem>
							</Navbar>
						</Header>
						<Main>
							<MainContent>
								<MainText>Hi I'm</MainText>
								<MainText>Alex Alves</MainText>
								<Description>
									Frontend Developer and UX/UI Designer.
								</Description>
								<DotLine />
								<SocialsText>SOCIALS</SocialsText>
								<SocialsIcons>
									<Icon style={{ marginLeft: 0 }}>
										<BsGithub
											size={24}
											onClick={() => handleSocialNav("github")}
										></BsGithub>
									</Icon>
									<Icon>
										<BsLinkedin
											size={24}
											onClick={() => handleSocialNav("linkedin")}
										></BsLinkedin>
									</Icon>
									<Icon>
										<BsInstagram
											size={24}
											onClick={() => handleSocialNav("instagram")}
										></BsInstagram>
									</Icon>
									<Icon>
										<BsTwitter
											size={24}
											onClick={() => handleSocialNav("twitter")}
										></BsTwitter>
									</Icon>
									<Icon>
										<BsTwitch
											size={24}
											onClick={() => handleSocialNav("twitch")}
										></BsTwitch>
									</Icon>
								</SocialsIcons>
							</MainContent>

							<Avatar />
							<Carpet />
							<Pictures />
							<Phone />
						</Main>
					</Content>
				</Scenario>
			) : (
				<h1>Nothing here for mobile yet :c</h1>
			)}
		</>
	);
};

export default Home;
