import React from "react";
import MarkdownText from "./MarkdownText";

interface PortfolioItemProps {
	heading: string;
	info: string[];
	text: string;
	img?: string;
	imgClass?: string;
	alt?: string;
}

function PortfolioItem({
	heading,
	info,
	text,
	img = "",
	imgClass = "",
	alt = "",
}: PortfolioItemProps) {
	const badges = Object.entries(info).map(([key, value]) => {
		return <div className="badge badge-secondary p-2.5">{value}</div>;
	});

	return (
		<div className="panel">
			<div className="card-body p-5">
				{heading !== "" && <h1>{heading}</h1>}
				<div className="flex flex-row gap-2">{badges}</div>
				<MarkdownText text={text} />
			</div>
		</div>
	);
}

export default PortfolioItem;
