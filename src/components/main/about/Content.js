import React from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Content = (props) => {

    return (
      <>
      <h2> {props.assets.content.title} </h2>
        <div className='about_me info'>

          <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} className="content">
            {props.assets.content.content}
            </ReactMarkdown>

       <div className="image_container"><img src={props.assets.images.src} alt={props.assets.images.alt} className="self_portrait" /></div>
        </div>
        </>
    )

}


export default Content;