import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// 设置高亮样式
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface Props {
  content?: string;
  className?: string;
}

const MarkDown: React.FC<Props> = prop => {
  const { content, className } = prop;
  return (
    <ReactMarkdown
      className={className}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={vscDarkPlus as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content || ''}
    </ReactMarkdown>
  );
};

export default MarkDown;
