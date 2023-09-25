import React from "react";
import { useEffect } from "react";
import IconGrid from "../components/IconGrid";
import Panel from "../components/Panel";
import { updateIcons } from "../modules/changeTheme";

function Home() {
	useEffect(() => {
		// Make sure icons are in the right state on page load
		updateIcons();
	});

	const greetingText =
		"Hello! I'm Nick Shockey. " +
		"I am a recent graduate with a Bachelor of Information Technology with a minor in Software Development from Kent State University. " +
		"After graduating, I felt that I didn't have enough knowledge to achieve my goal of becoming a software developer, so I learned a lot in my own time. " +
		"Mainly Git, JavaScript, TypeScript, Python, Vue, Svelte, React, Rust, Java, and Kotlin. " +
		"It took a bit of time and lots of self-improvement, but I feel I'm at a point where I can comfortably use most major programming languages, " +
		"or at least learn how to fill in the gaps.\n\n" +
		"I am a very quick learner and can adapt to new tools and workflows easily. " +
		"Learning new information takes time, of course, but I can get to that point much quicker than most. " +
		"Along with that, I can use many different languages and have a good foundation of programming in general. " +
		"At the end of the day, instead of thinking “how can I do this with X language” it's easier " +
		"for me to think of the higher-level logic that's needed to solve the problem.\n\n" +
		"I like to solve problems, and software development is one way to do that. " +
		"People needed an easy way to instantly communicate with each other, so email was made. " +
		"The general public needed an easy way to use that protocol, so Google made Gmail, Microsoft made Outlook, etc. " +
		"This kind of logic can apply to every step of the process that led to me publishing this site. " +
		"You need a way to reuse HTML code, you need a way to export that code into a format the browser will recognize, " +
		"you need a way to store all of that information on a server and host it at a URL. " +
		"Ultimately, software development is one gigantic puzzle that you try to solve to make everyone's lives easier.";

	return (
		<span>
			<div className="panelContainer">
				<Panel
					heading="Who am I?"
					text={greetingText}
				/>
				<div className="panel">
					<IconGrid />
				</div>
			</div>
		</span>
	);
}

export default Home;
