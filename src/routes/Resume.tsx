import React from "react";
import Panel from "../components/Panel";

const Resume = () => {
	const newLine = "\n\n";

	const coverLetterMD =
		"Dear reader," +
		newLine +
		"I am a recent graduate with a Bachelor of Science in IT with a minor in Software Development and am seeking more experience in the programming field. " +
		"I have written several web applications using Visual Studio Code and I have a strong understanding of programming. " +
		"I am a quick learner and can understand new information and practices with relative ease. " +
		"Here is what I have to offer:\n" +
		"- Around 1 years’ experience in creating web applications in JavaScript. I am also very familiar with TypeScript, Python, HTML, CSS, C++, and Visual Basic.\n" +
		"- Great at problem solving and good at taking advantage of current resources.\n" +
		"- Excellent at researching new solutions and information.\n" +
		"- Willingness to learn." +
		newLine +
		"Thank you for taking the time to review my résumé. I look forward to talking with you." +
		newLine +
		"Sincerely," +
		newLine +
		"Nick Shockey";

	const hardSkillsMD =
		"## Most used languages and frameworks" +
		newLine +
		"JavaScript, TypeScript, Vue, Python, HTML, CSS" +
		newLine +
		"## Also skilled with" +
		newLine +
		"React, Markdown, Git/GitHub/GitLab, C#, Tailwindcss, Bootstrap" +
		newLine +
		"## Want to learn more" +
		newLine +
		"Rust, C/C++, SQL, Bash" +
		newLine +
		"## Favorite dev tools" +
		newLine +
		"Visual Studio Code, Visual Studio, Notepad++, Neovim, Beekeeper Studio" +
		newLine +
		"## Other skills" +
		newLine +
		"Windows, Linux, Microsoft Office, Godot, Unity, Photoshop, Affinity Photo, DaVinci Resolve";

	const softSkillsMD =
		"- Savvy in PC building and troubleshooting\n" +
		"- Excellent written and oral communication skills\n" +
		"- A dependable, hard-worker\n" +
		"- Easy and eager to learn new tasks and knowledge\n";

	const workHistoryMD =
		"- Help Desk Technician [Contract]\n" +
		"\t - Signet Jeweler's\n" +
		"\t- October 2021 to January 2022\n" +
		"- Sales Associate\n" +
		"\t - Dollar General\n" +
		"\t - June 2016 to March 2020";

	return (
		<div className="panelContainer">
			<Panel
				text={coverLetterMD}
				heading="Open cover letter"
			/>
			<Panel
				text={hardSkillsMD}
				heading="Hard skills"
			/>
			<Panel
				text={softSkillsMD}
				heading="Soft skills"
			/>
			<Panel
				text={workHistoryMD}
				heading="Work history and experience"
			/>
		</div>
	);
};

export default Resume;
