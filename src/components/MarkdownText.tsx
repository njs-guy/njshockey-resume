import ReactMarkdown from "react-markdown";

interface MdTxtProps {
    text: string,
}

const MarkdownText = ({text}: MdTxtProps) => {
    function headingHTML(props: any) {
        return <h1 className="panelHeading">{props.children}</h1>;
    }

    function pHTML(props: any) {
        return <p className="panelHeading">{props.children}</p>;
    }

    return(
        <ReactMarkdown
            
            components={{ 
                h1: headingHTML,
            }}
            
            children={text} />
    )
}

export default MarkdownText;