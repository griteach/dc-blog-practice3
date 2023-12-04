import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Syntaxhighlighter({ content }: { content: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {content}
    </SyntaxHighlighter>
  );
}
