import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/pokeball.json";

function Error() {
	return (
		<div className="container mx-auto my-4 w-96 h-full">
			<Lottie animationData={animationData} />
		</div>
	);
}

export default Error;
