import React, { useState } from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Main from "../../components/Main";
import useWindowSize from "../../utils/useWindowSize";
import { Content, Overlay, Room, Scenario, Square } from "./styles";

const Home = () => {
	const width = useWindowSize()[0];
	const [showContact, setShowContact] = useState(false);

	const handleShowContact = () => {
		setShowContact((curr) => !curr);
	};

	return (
		<>
			{width > 768 ? (
				<Scenario>
					{showContact && <Overlay />}
					<Room>
						<Square></Square>
					</Room>
					<Content>
						<Header />
						<Main onPhoneClick={handleShowContact} />
					</Content>

					{showContact && <Contact onClick={handleShowContact} />}
				</Scenario>
			) : (
				<h1>Nothing here for mobile yet :c</h1>
			)}
		</>
	);
};

export default Home;
