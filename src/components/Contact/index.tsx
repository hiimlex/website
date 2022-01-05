import React, { useRef, useState } from "react";
import Suitcase from "../Suitcase";
import {
	Button,
	Close,
	Container,
	DotNotation,
	FormContent,
	GroupRow,
	InfoContent,
	Input,
	Link,
	SubTitle,
	Title,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { sendWppMessage } from "../../utils/sendWppMessage";
import { sendMailMessage } from "../../utils/sendMailMessage";

interface ContactProps {
	onClick: () => void;
}

const Contact = ({ onClick }: ContactProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [fade, setFade] = useState(false);

	const handleFormMessage = () => {
		if (inputRef.current) {
			sendMailMessage(inputRef.current.value);
		}
	};

	const fadeOut = () => {
		setFade(true);

		setTimeout(() => {
			setFade(false);
			onClick();
		}, 300);
	};

	return (
		<Container fade={fade}>
			<InfoContent>
				<Suitcase />

				<FormContent>
					<DotNotation />
					<Title>Contact</Title>
					<SubTitle>
						Send me a Mail or <Link onClick={sendWppMessage}>Whatsapp me.</Link>
					</SubTitle>
					<GroupRow>
						<Input ref={inputRef} type="text" />
						<Button onClick={handleFormMessage}>Sent</Button>
					</GroupRow>
				</FormContent>

				<Close onClick={fadeOut}>
					<AiOutlineClose size={18} />
				</Close>
			</InfoContent>
		</Container>
	);
};

export default Contact;
