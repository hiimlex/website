import React from "react";
import { AvatarStyle } from "./styles";

const Avatar = () => (
	<AvatarStyle src={process.env.PUBLIC_URL + "/assets/avatar.png"} />
);

export default Avatar;
