import React from "react";
import { navigateToUrl } from "../../utils/navigateToUrl";
import { PicturesStyle } from "./styles";

const Pictures = () => (
	<PicturesStyle
		src={process.env.PUBLIC_URL + "/assets/quadros.png"}
		onClick={() => navigateToUrl("https://hiimlex.github.io/portfolio")}
	/>
);

export default Pictures;
