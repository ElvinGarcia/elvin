import React, { useEffect, useState } from "react"
import Content from "./Content";


export default function Writing() {
  const [data, setData] = useState([ ]);

  useEffect(
    () => {
      // repo list content
      const url = 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts';
      const getData = async () => {
        try {
          const resp = await fetch(url);
          const json = await resp.json();
          setData(json);
        } catch (error) {
          console.log("error message", error);
        }
      };
      getData();
    }
    , []);


    const posts = data.map( obj => {
      const post = {}
      const body = atob(obj.content)
      const content = body.split("---\n")[2];
      post["content"] = content;
      const header = body.substring(content.indexOf("---") + 3, content.lastIndexOf("---"));
      const headerValues = header.split("\n");
      headerValues.forEach((a,k)=>{ if(a !== "--" && !!a){post[a.split(":")[0]]=a.split(":")[1];}});
      return post;
     }
    )




  const content = posts.map((obj, id) => < Content
    title={obj.title}
    content={obj.content}
    url="about.com"
    key={id}
  />);

  return (
    <section className="technical writing">
      <h2>Technical Writing</h2>
      {content}
    </section>
    )

}
