import React from "react";
import Panel from "../components/Panel";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
	const thisWebsiteMD =
		"The site you're reading right now was made with React and TypeScript! " +
		"While I could have used a website maker (which I have used for resumes in the past), making one from scratch sounded more interesting and more fun.";

	const websiteInfo = ["React", "TypeScript"];

	return (
		<div className="panelContainer">
			<PortfolioItem
				heading="This website"
				text={thisWebsiteMD}
				info={websiteInfo}
			/>
		</div>
	);
}

export default Portfolio;
