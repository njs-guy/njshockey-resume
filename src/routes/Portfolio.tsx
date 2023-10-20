import React from "react";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
	const websiteInfo = ["React", "TypeScript", "Tailwind CSS", "DaisyUI"];
	const thisWebsiteMD =
		"The site you're reading right now was made with React and TypeScript! " +
		"While I could have used a website maker (which I have used for résumés in the past), making one from scratch sounded more interesting and more fun. " +
		"My previous résumé site used vanilla HTML, CSS, and JavaScript. " +
		"While it was easy to set up, it was hard to maintain. " +
		"Adding new information and keeping consistency " +
		"required me to modify more of the site than I'd like. " +
		"I had also gotten much better at web development, " +
		"so I figured I should make a new one. " +
		"The frontend uses React, which is the most generic choice for a project like this, " +
		"but I wanted to learn React so this seemed like a suitable way to do that. " +
		"This site also uses Tailwind CSS with DaisyUI components. " +
		"Bootstrap definitely *works* but Tailwind is easier to customize, " +
		"which makes sites feel less generic. " +
		"On top of that, I decided to go with a Nord color scheme for this site. " +
		"I feel I've gotten pretty good with color choices after making All Blue, " +
		"but having a good color scheme that I know works increases the visual polish " +
		"and adds a more professional feeling to the site.";

	const allBlueInfo = ["TypeScript", "NodeJS"];
	const allBlueMD =
		"All Blue is a VS Code theme generated through TypeScript. " +
		"While this wasn't hard to make on a coding level, it was pretty challenging from a design perspective. " +
		"The main theme uses all blue-ish colors (hence the name), " +
		"so the hard part was picking colors that had nice contrast with each other while still feeling *blue*. " +
		"There are two other variants that use more colors than blue, " +
		"so if this gimmick isn't your thing, you have options. " +
		"This was originally made by editing a JSON file, " +
		"but that's obviously not sustainable for three different variants, " +
		"so All Blue is now generated through TypeScript and ts-node. " +
		"I originally made this because I was curious how VS Code themes worked, " +
		"but I actually ended up making a coding theme that I enjoy using. " +
		"In fact, I used it to edit this page since the string color is " +
		"easier on the eyes than most coding themes I've used. " +
		"While it's not doing anything fancy under the hood, " +
		"All Blue's data is pretty well organized. " +
		"If I ever feel like making another VS Code theme, " +
		"it should be pretty easy to fork it and swap around colors, " +
		"which would save a ton of time. " +
		"Check out the GitHub repo for screenshots!";

	const keysmithInfo = ["Rust"];
	const keysmithMD =
		"Keysmith is a key generation library for Rust. " +
		"It's nothing crazy, but it can create randomly generated keys, v4 uuids, and timestamps. " +
		"This is useful for file generation and database id's. " +
		"Keysmith is available on [crates.io](https://crates.io/crates/keysmith) " +
		"and I've found myself using it in other Rust projects.";

	const gmrInfo = ["Vue", "TypeScript", "Bootstrap"];
	const gmrMD =
		"This is a Markdown reader and editor that I mainly made to learn a few new skills. Front-end libraries are extremely popular, so I started with Vue since it kept gaining popularity and has a lower learning curve than React from what I heard at the time. Not to mention that Vue is just really good in general. Bootstrap is also a good skill to have and lets you spend less time worrying about the look of sites, and more time actually developing them. I also decided to use Markdown-it for the Markdown parsing as a way to learn how to integrate external libraries with your own code. I made this a while ago, but it was still a nice stepping stone toward more complicated projects. I could definitely improve on this if I wanted to, but I learned what I wanted to from it, so I decided to move on after it was finished.";

	const rngInfo = ["JavaScript", "HTML", "CSS"];
	const rngMD =
		"This is a random number generator that I made as my first project after learning JavaScript. It's not something up to my own standards nowadays but it's a bit surprising in hindsight how much I did without any frontend or CSS libraries.";

	const pcInfo = ["Ryzen 2600x", "RX 580", "32GB DDR4 RAM"];
	const pcMD =
		"While I mostly focus on software, I can also work with hardware pretty well. Overall, I’m really happy with this build. It's been a few years, so I could use a better GPU, but it runs most games I play really well. Even at 1440p. I also dual-boot Windows 10 and Fedora Linux.";

	return (
		<div className="panelContainer">
			<PortfolioItem
				heading="This website"
				info={websiteInfo}
				text={thisWebsiteMD}
				github="https://github.com/njs-guy/njshockey-resume"
				gitlab="https://gitlab.com/njs-guy/njshockey-resume"
			/>
			<PortfolioItem
				heading="All Blue"
				info={allBlueInfo}
				text={allBlueMD}
				github="https://github.com/njs-guy/all-blue-theme"
				gitlab="https://gitlab.com/njs-guy/all-blue-theme"
			/>
			<PortfolioItem
				heading="Keysmith"
				info={keysmithInfo}
				text={keysmithMD}
				github="https://github.com/njs-guy/keysmith-rs"
				gitlab="https://gitlab.com/njs-guy/keysmith-rs"
			/>
			<PortfolioItem
				heading="Generic Markdown Reader"
				info={gmrInfo}
				text={gmrMD}
				github="https://github.com/njs-guy/generic-markdown-reader"
				gitlab="https://gitlab.com/njs-guy/generic-markdown-reader"
			/>
			<PortfolioItem
				heading="RNG Machine"
				info={rngInfo}
				text={rngMD}
				github="https://github.com/njs-guy/RNG-Machine"
				gitlab="https://gitlab.com/njs-guy/RNG-Machine"
			/>
			<PortfolioItem
				heading="Built a custom PC"
				info={pcInfo}
				text={pcMD}
			/>
		</div>
	);
}

export default Portfolio;
