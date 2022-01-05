import React from "react";
import { sendWppMessage } from "../../utils/sendWppMessage";
import { PhoneStyle } from "./styles";

const Phone = () => (
	<PhoneStyle
		src={process.env.PUBLIC_URL + "/assets/interfone.png"}
		onClick={() => sendWppMessage("")}
	/>
);

export default Phone;
