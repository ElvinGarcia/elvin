import React, { useEffect, useState } from "react"
import Content from "./Content";


export default function Writing() {
  const [data, setData] = useState([ ]);

  useEffect(
    () => {
      const url = '';
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

  const content = data.map( (obj,id) => < Content /> );
  return (
    <section className="technical writing">
      <h2>Personal Writing</h2>
      {content}
    </section>
    )

}
