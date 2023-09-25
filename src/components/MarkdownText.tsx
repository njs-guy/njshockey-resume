import React from "react";
import ReactMarkdown from "react-markdown";

interface MdTxtProps {
	text: string;
}

function MarkdownText({ text }: MdTxtProps) {
	function headingHTML(props: any) {
		return <h1 className="panelHeading">{props.children}</h1>;
	}

	function h2HTML(props: any) {
		return <h2>{props.children}</h2>;
	}

	function pHTML(props: any) {
		return (
			<p className="text-base-content prose mb-2 max-w-none">
				{props.children}
			</p>
		);
	}

	function ulHTML(props: any) {
		return (
			<ul className="text-base-content max-w-none list-disc list-inside">
				{props.children}
			</ul>
		);
	}

	return (
		<ReactMarkdown
			components={{
				h1: headingHTML,
				h2: h2HTML,
				ul: ulHTML,
				p: pHTML,
			}}
		>
			{text}
		</ReactMarkdown>
	);
}

export default MarkdownText;
