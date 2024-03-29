import React from "react";
import MarkdownText from "./MarkdownText";

interface PanelProps {
	heading?: string;
	img?: string;
	imgClass?: string;
	alt?: string;
	text: string;
}

function Panel({
	heading = "",
	img = "",
	imgClass = "",
	alt = "",
	text,
}: PanelProps) {
	return (
		<div className="panel">
			{img !== "" && (
				<figure>
					<img
						src={img}
						className={imgClass}
						alt={alt}
						title={alt}
					/>
				</figure>
			)}
			<div className="card-body p-5">
				{heading !== "" && <h1>{heading}</h1>}
				<MarkdownText text={text} />
			</div>
		</div>
	);
}

export default Panel;
