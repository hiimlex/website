import React from "react";
import { navigateToUrl } from "../../utils/navigateToUrl";
import {
	MainText,
	Description,
	DotLine,
	SocialsText,
	SocialsIcons,
	Icon,
	TextTop,
	AnimatedTile,
	TextBottom,
	Name,
} from "./styles";
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTwitch,
	BsTwitter,
} from "react-icons/bs";

type Socials = "github" | "instagram" | "linkedin" | "twitch" | "twitter";

const Main = () => {
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
		<AnimatedTile>
			<TextTop>
				<div>
					<MainText>Hi I'm</MainText>
					<Name>Alex Alves</Name>
					<Description>Frontend Developer and UX/UI Designer.</Description>
					<DotLine />
				</div>
			</TextTop>
			<TextBottom>
				<div>
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
				</div>
			</TextBottom>
		</AnimatedTile>
	);
};

export default Main;
