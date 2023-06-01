import React from "react";

import GitLabIcon from "./icons/GitLabIcon";
import GitHubIcon from "./icons/GitHubIcon";

function Footer() {
	return (
		<div className="flex flex-row gap-2 justify-center">
			<GitHubIcon
				link="https://github.com/njshockey"
				footer={true}
			/>
			<GitLabIcon
				link="https://gitlab.com/njshockey"
				footer={true}
			/>
		</div>
	);
}

export default Footer;
