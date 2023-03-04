import React from "react";

// The Kotlin logo was taken from kotlinlang.org.
// More information can be found here
// https://kotlinlang.org/docs/kotlin-brand-assets.html#kotlin-logo.

function KotlinIcon() {
	return (
		<div>
			<svg
				className="icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 500 500"
			>
				<title>Kotlin</title>
				<polygon points="500,500 0,500 0,0 500,0 250,250" />
			</svg>
		</div>
	);
}

export default KotlinIcon;
