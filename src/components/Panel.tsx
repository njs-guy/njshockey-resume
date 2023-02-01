import MarkdownText from "./MarkdownText";

interface PanelProps {
	heading?: string;
	img?: string;
	imgClass?: string;
	alt?: string;
	text: string;
}

const Panel = ({
	heading = "",
	img = "",
	imgClass = "",
	alt = "",
	text,
}: PanelProps) => {
	return (
		<div className="panel lg:card-side">
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
				{heading !== "" && (
					<h1 className="card-title panelHeading">{heading}</h1>
				)}

				<MarkdownText text={text} />
			</div>
		</div>
	);
};

export default Panel;
