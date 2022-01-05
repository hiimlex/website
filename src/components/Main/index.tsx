import React from "react";
import { navigateToUrl } from "../../utils/navigateToUrl";
import Avatar from "../Avatar";
import Carpet from "../Carpet";
import Phone from "../Phone";
import Pictures from "../Pictures";
import {
	MainContainer,
	MainContent,
	MainText,
	Description,
	DotLine,
	SocialsText,
	SocialsIcons,
	Icon,
} from "./styles";
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTwitch,
	BsTwitter,
} from "react-icons/bs";
import Guitars from "../Guitars";

type Socials = "github" | "instagram" | "linkedin" | "twitch" | "twitter";

interface MainProps {
	onPhoneClick: () => void;
}

const Main = ({ onPhoneClick }: MainProps) => {
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
		<MainContainer>
			<MainContent>
				<MainText>Hi I'm</MainText>
				<MainText>Alex Alves</MainText>
				<Description>Frontend Developer and UX/UI Designer.</Description>
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
			<Phone onClick={onPhoneClick} />
			<Guitars />
		</MainContainer>
	);
};

export default Main;
