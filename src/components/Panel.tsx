interface PanelProps {
    text: string,
}

const Panel = ({text}: PanelProps) => {
    return (
        <div className="card card-body bg-base-200 p-5">
            <p>{text}</p>
        </div>
    )
}

export default Panel;