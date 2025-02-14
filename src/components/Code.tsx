import "highlight.js/styles/a11y-dark.css";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

export const Code: React.FC<{ code: string }> = ({ code }) => {
    const cleanCode = code.replace(/^\s+|\s+$/g, '');
    const highlightedCode = hljs.highlight(cleanCode, { language: 'typescript' }).value;

    return (
        <pre className="hljs code">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
        </pre>
    )
}