interface PanelProps {
    heading?: string,
    text: string,
}

const Panel = ({heading = '', text}: PanelProps) => {
    return (
        <div className="panel">
            {heading !== '' &&
                <h1 className="prose-2xl font-bold">{heading}</h1>
            }
            <p>{text}</p>
        </div>
    )
}

export default Panel;