import React from "react";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
	const websiteInfo = ["React", "TypeScript"];
	const thisWebsiteMD =
		"The site you're reading right now was made with React and TypeScript! " +
		"While I could have used a website maker (which I have used for resumes in the past), making one from scratch sounded more interesting and more fun.";

	const allBlueInfo = ["TypeScript", "NodeJS"];
	const allBlueMD =
		"A VS Code theme generated through TypeScript. " +
		"While this wasn't hard to make on a coding level, it was pretty challenging from a design perspective. " +
		"The main theme uses all blue-ish colors (hence the name), " +
		'so the hard part was picking colors that had nice contrast with each other while still feeling "blue". ' +
		"There are two other variants that use more colors than blue, " +
		"so if this gimmick isn't your thing, you have options. " +
		"This was originally made by editing a JSON file, " +
		"but that's obviously not sustainable for three different variants, " +
		"so All Blue is now generated through TypeScript and ts-node. " +
		"I originally made this because I was curious how VS Code themes worked, " +
		"but I actually ended up making a coding theme that I enjoy using.";

	const keysmithInfo = ["Rust"];
	const keysmithMD =
		"A key generation library for Rust. " +
		"It's nothing fancy but it can create randomly generated keys, v4 uuids, and timestamps. " +
		"This is useful for file generation and database id's. " +
		"Keysmith is available on crates.io and I've found myself using it in other Rust projects.";

	return (
		<div className="panelContainer">
			<PortfolioItem
				heading="This website"
				info={websiteInfo}
				text={thisWebsiteMD}
				github="https://github.com/njshockey/njshockey-resume"
				gitlab="https://www.youtube.com/"
			/>
			<PortfolioItem
				heading="All Blue"
				info={allBlueInfo}
				text={allBlueMD}
			/>
			<PortfolioItem
				heading="Keysmith"
				info={keysmithInfo}
				text={keysmithMD}
			/>
		</div>
	);
}

export default Portfolio;
