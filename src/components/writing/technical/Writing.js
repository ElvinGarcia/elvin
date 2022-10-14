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

  const content = data.map((obj, id) => < Content
    title={obj.name}
    url={obj.download_url}
    key={id}
  />);

  return (
    <section className="technical writing">
      <h2>Technical Writing</h2>
      {content}
    </section>
    )

}
