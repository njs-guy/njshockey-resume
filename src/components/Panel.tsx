interface PanelProps {
    heading?: string,
    text: string,
}

const Panel = ({heading = '', text}: PanelProps) => {
    return (
        <div className="panel">
            {heading !== '' &&
                <h1 className="panelHeading">{heading}</h1>
            }
            <p>{text}</p>
        </div>
    )
}

export default Panel;