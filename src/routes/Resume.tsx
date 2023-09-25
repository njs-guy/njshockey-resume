import React from "react";
import Panel from "../components/Panel";

function Resume() {
	const newLine = "\n\n";

	const techSkillsMD =
		"## Languages" +
		newLine +
		"JavaScript/TypeScript, Python, Rust, HTML, CSS, C#, C/C++, Java, Kotlin, Dart, Go" +
		newLine +
		"## Frameworks" +
		newLine +
		"Vue, React, Svelte, TailwindCSS, Bootstrap, Django, Spring Boot, ASP.NET, Flutter" +
		newLine +
		"## Databases" +
		newLine +
		"SQLite, PostgresQL, MySQL" +
		newLine +
		"## Tools" +
		newLine +
		"VS Code, Neovim, Git/GitHub/GitLab, Docker, Teams, Bash/Powershell" +
		newLine +
		"## Other skills" +
		newLine +
		"Windows, Linux, Microsoft Office, Godot/GDScript, Unity, Photoshop, Affinity Photo, DaVinci Resolve" +
		newLine +
		"## Hobbies" +
		newLine +
		"Mainly video games. I've been mostly playing Nintendo and indie games lately. (Play CrossCode and Cassette Beasts.) I also make [YouTube videos](https://www.youtube.com/c/flameguy21) about video games." +
		newLine +
		"## Favorite editor themes" +
		newLine +
		"OneDark, Catppuccin, Tokyo Night, Nord, Night Owl, All Blue, SynthWave '84";

	const softSkillsMD =
		"- Savvy in PC building and troubleshooting\n" +
		"- Excellent written and oral communication skills\n" +
		"- A dependable, hard-worker\n" +
		"- Easy and eager to learn new tasks and knowledge\n";

	const educationMD =
		"## Bachelors in IT\n" +
		"### Kent State University • GPA 3.7/4.0\n" +
		"- Minored in Software Development\n" +
		"- Relevant courses: Advanced C++ Programming, Advanced C# Programming, Mobile Application Programming\n" +
		"- Made the Dean's List just about every semester and made Magna Cum Laude.\n" +
		"- Hundreds of hours of online learning and practice outside of my school's curriculum.\n" +
		"## Trumbull Career and Technical Center\n" +
		"### Certificate in Web Design and Application Development\n" +
		"## Newton Falls High School\n" +
		"### High School Diploma\n";

	const workHistoryMD =
		"## Various Open Source projects\n" +
		"Created several projects in my personal time to improve my skills and knowledge. See portfolio.\n" +
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
				heading="Technical skills"
				text={techSkillsMD}
			/>
			<Panel
				heading="Soft skills"
				text={softSkillsMD}
			/>
			<Panel
				heading="Education"
				text={educationMD}
			/>
			<Panel
				heading="Work Experience"
				text={workHistoryMD}
			/>
		</div>
	);
}

export default Resume;
