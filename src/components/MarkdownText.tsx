import ReactMarkdown from "react-markdown";

interface MdTxtProps {
    text: string,
}

const MarkdownText = ({text}: MdTxtProps) => {
    function headingHTML(props: any) {
        return <h1 className="panelHeading">{props.children}</h1>;
    }

    function h2HTML(props: any) {
        return <h2 className="prose-xl font-bold">{props.children}</h2>
    }

    function pHTML(props: any) {
        return <p>{props.children}</p>;
    }

    function ulHTML(props: any) {
        return <ul className="list-disc list-inside">{props.children}</ul>
    }

    return(
        <ReactMarkdown
            
            components={{ 
                h1: headingHTML,
                h2: h2HTML,
                ul: ulHTML,
                p: pHTML,
            }}
            
            children={text} />
    )
}

export default MarkdownText;