import React from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';




const Content = (props) => {
  return (
    <section className="technical writing content">
      <h2>{props.post.title}</h2>
       <div className="writing content ">
        <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} >
          {props.post.content}
        </ReactMarkdown>
      </div>
    </section>

    )



}


export default Content;


