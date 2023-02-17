import React from "react";
import Panel from "../components/Panel";

function Resume() {
	const newLine = "\n\n";

	const techSkillsMD =
		"## Languages" +
		newLine +
		"JavaScript/TypeScript, Python, Rust, HTML, CSS, C#, C/C++" +
		newLine +
		"## Frameworks" +
		newLine +
		"Vue, React, Svelte, TailwindCSS, Bootstrap, Django, ASP.NET" +
		newLine +
		"## Databases" +
		newLine +
		"SQLite, MySQL" +
		newLine +
		"## Tools" +
		newLine +
		"VS Code, Neovim, Git/GitHub/GitLab, Docker, Teams, Bash/Powershell" +
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
		"## Help Desk Technician\n" +
		"### Signet Jeweler's • October 2021 to January 2022\n" +
		"As a contracted Help Desk Technician at Teksystems, " +
		"I demonstrated exceptional problem-solving skills " +
		"by expertly resolving technical issues related to " +
		"iPads, gem scopes, internet connectivity, and phone systems for numerous stores. " +
		"I was responsible for providing remote support, " +
		"which involved guiding clients through password resets " +
		"and other technical challenges. " +
		"Throughout my tenure, I consistently received positive feedback " +
		"from both clients and supervisors, " +
		"who praised my ability to handle complex technical issues " +
		"and deliver solutions with speed and precision.\n" +
		"## Sales Associate\n" +
		"### Dollar General • June 2016 to March 2020\n" +
		"While I was mostly in charge of stocking shelves, I also helped customers find " +
		"what they were looking for which helped my interpersonal " +
		"and memorization skills. Since I was in school at the time, this job also " +
		"allowed me the opportunity to work on time management skills, " +
		"which made me more efficient in general.";

	return (
		<div className="panelContainer">
			<Panel
				text={techSkillsMD}
				heading="Technical skills"
			/>
			<Panel
				text={softSkillsMD}
				heading="Soft skills"
			/>
			<Panel
				text={workHistoryMD}
				heading="Work Experience"
			/>
		</div>
	);
}

export default Resume;
