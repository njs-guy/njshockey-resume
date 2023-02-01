import React from "react";

interface SkillIconProps {
	src: string;
	alt: string;
}

function SkillIcon({ src, alt }: SkillIconProps) {
	return (
		<img
			src={src}
			alt={alt}
			title={alt}
			className="icon h-16"
		/>
	);
}

export default SkillIcon;
