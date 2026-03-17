import { BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";
import { navigateToUrl } from "../../utils/navigateToUrl";
import {
	AnimatedTile,
	Description,
	DotLine,
	Icon,
	MainText,
	Name,
	SocialsContainer,
	SocialsIcons,
	SocialsText,
	TextBottom,
	TextTop,
} from "./styles";

type Socials = "github" | "linkedIn" | "twitch";
const socialLinks: Record<Socials, string> = {
	github: "https://github.com/hiimlex",
	linkedIn: "https://www.linkedin.com/in/alex-rodrigues-83558718b/",
	twitch: "https://www.twitch.tv/yunoal",
};

const Main = () => {
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
				<SocialsContainer>
					<SocialsText>SOCIALS</SocialsText>
					<SocialsIcons>
						<Icon
							href={socialLinks.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsGithub
								size={24}
								onClick={() => navigateToUrl(socialLinks.github)}
							></BsGithub>
						</Icon>
						<Icon
							href={socialLinks.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsLinkedin
								size={24}
								onClick={() => navigateToUrl(socialLinks.linkedIn)}
							></BsLinkedin>
						</Icon>
						<Icon
							href={socialLinks.twitch}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsTwitch size={24}></BsTwitch>
						</Icon>
					</SocialsIcons>
				</SocialsContainer>
			</TextBottom>
		</AnimatedTile>
	);
};

export default Main;
