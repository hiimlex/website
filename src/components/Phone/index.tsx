import React from "react";
import { PhoneStyle } from "./styles";

interface PhoneProps {
	onClick: () => void;
}

const Phone = ({ onClick }: PhoneProps) => (
	<PhoneStyle
		src={process.env.PUBLIC_URL + "/assets/interfone.png"}
		onClick={onClick}
	/>
);

export default Phone;
