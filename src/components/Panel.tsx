import MarkdownText from './MarkdownText'

interface PanelProps {
    heading?: string,
    text: string,
}


const Panel = ({heading = '', text}: PanelProps) => {
    return (
        <div className="panel">
            <MarkdownText text={text} />
        </div>
    )
}

export default Panel;