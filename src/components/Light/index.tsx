import React from "react";
import { LightStyle } from "./styles";

const Light = () => (
	<LightStyle src={process.env.PUBLIC_URL + "assets/lampada.png"} />
);

export default Light;
