import React from "react";
import { CarpetStyle } from "./styles";

const Carpet = () => (
	<CarpetStyle src={process.env.PUBLIC_URL + "/assets/tapete.png"} />
);

export default Carpet;
