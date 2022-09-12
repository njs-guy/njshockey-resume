interface PanelProps {
    text: string,
}

const Panel = ({text}: PanelProps) => {
    return (
        <div className="panel">
            <p>{text}</p>
        </div>
    )
}

export default Panel;