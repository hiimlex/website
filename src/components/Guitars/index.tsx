import React from "react";
import { GuitarsStyles } from "./styles";

const Guitars = () => {
	return (
		<GuitarsStyles src={process.env.PUBLIC_URL + "/assets/guitarras.png"} />
	);
};

export default Guitars;
