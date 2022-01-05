import React from "react";
import { SuitcaseStyle } from "./styles";

const Suitcase = () => {
	return <SuitcaseStyle src={process.env.PUBLIC_URL + "/assets/mala.png"} />;
};

export default Suitcase;
