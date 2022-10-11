import React, { useEffect, useState } from "react"
import Content from "./Content";


export default function Github() {
  const [data, setData] = useState([ ]);

  useEffect(
    () => {
      // const url = 'https://api.github.com/users/elvingarcia/repos?sort=created&per_page=10'; official api
      const url = 'https://gh-pinned-repos.egoist.sh/?username=elvinGarcia';
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

  const content = data.map(
    (obj,id) => < Content
      title={obj.repo}
      description={obj.description}
      start_count={obj.stars}
      url={obj.link}
      key={id}
      languages={obj.language}
    />
  );

  return (
    <section className="github">
      <h2>GitHub</h2>
      {content}
    </section>
    )

}
