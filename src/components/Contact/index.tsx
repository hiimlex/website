import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { sendMailMessage } from "../../utils/sendMailMessage";
import { sendWppMessage } from "../../utils/sendWppMessage";
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

interface ContactProps {
	onClick: () => void;
}

const Contact = ({ onClick }: ContactProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
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

	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				fadeOut();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [containerRef]);

	return (
		<Container fade={fade} ref={containerRef}>
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
