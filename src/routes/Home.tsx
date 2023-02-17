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
		"I'm an ambitious and highly motivated recent graduate " +
		"who is eager to leverage my academic achievements and passion for learning " +
		"to contribute to a dynamic and fast-paced professional environment. " +
		"With a natural aptitude for acquiring new skills and a proven track record of academic excellence, " +
		"I'm confident in my ability to quickly adapt to new challenges and make meaningful contributions to any team. " +
		"All while being proficient in multiple programming languages and frameworks. " +
		"This e-portfolio will tell you about my professional goals, skills, and experience.";

	const proGoalsMd =
		"Driven by my ultimate goal of becoming a software developer, " +
		"I recognized the need to improve my technical skills beyond what I learned in school. " +
		"To achieve this, I proactively pursued online learning opportunities, " +
		"where I gained proficiency in a range of programming languages and tools " +
		"such as Python, HTML, CSS, JavaScript, Rust, and Git. " +
		"In order to solidify my knowledge, I committed to daily practice " +
		"and dedicated myself to creating open source projects that showcased my abilities.\n\n" +
		"As a result of my persistence and dedication, " +
		"I have become well-versed in the latest industry trends and tools, " +
		"and possess the ability to quickly adapt to new technologies. " +
		"I believe that my passion for learning and strong work ethic " +
		"make me an ideal candidate for any software development role.";

	return (
		<span>
			<div className="panelContainer">
				<Panel
					img="https://via.placeholder.com/600x800"
					imgClass="panelImg"
					text={greetingText}
				/>
				<Panel
					heading="Professional Goals"
					text={proGoalsMd}
				/>
				<div className="panel">
					<IconGrid />
				</div>
			</div>
		</span>
	);
}

export default Home;
