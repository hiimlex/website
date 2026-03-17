import { useLocation } from "react-router";
import Light from "../Light";
import { HeaderContent } from "./styles";

const Header = () => {
	const location = useLocation();

	const handleLocation = () => {
		return location.pathname.split("/");
	};

	return (
		<HeaderContent>
			<Light />
		</HeaderContent>
	);
};

export default Header;
