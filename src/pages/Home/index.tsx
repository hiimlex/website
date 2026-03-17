import { useEffect, useState } from "react";
import Avatar from "../../components/Avatar";
import Carpet from "../../components/Carpet";
import Contact from "../../components/Contact";
import Guitars from "../../components/Guitars";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Phone from "../../components/Phone";
import Pictures from "../../components/Pictures";
import useWindowSize from "../../utils/useWindowSize";
import { Content, Overlay, Room, Scenario, Square } from "./styles";

const Home = () => {
	const width = useWindowSize()[0];
	const [showContact, setShowContact] = useState(false);

	const handleShowContact = () => {
		setShowContact((curr) => !curr);
	};

	const escFunction = (e: any) => {
		if (e.keyCode === 27) {
			setShowContact(false);
		}
	};

	const configureEscKey = () => {
		document.addEventListener("keydown", escFunction, false);
	};

	useEffect(() => {
		configureEscKey();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Scenario>
			{showContact && <Overlay />}
			<Room>
				<Square></Square>
			</Room>
			<Content>
				<Header />
				<Main />

				<Avatar />
				<Carpet />
				<Guitars />
				<Pictures />
				<Phone onClick={handleShowContact} />
			</Content>

			{showContact && <Contact onClick={handleShowContact} />}
		</Scenario>
	);
};

export default Home;
