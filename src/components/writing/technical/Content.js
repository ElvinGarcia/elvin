import React from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const Content = (props) => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} >
          {props.content}
      </ReactMarkdown>
    </>
    )
}


export default Content;


