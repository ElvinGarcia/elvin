import React, { useEffect, useState } from "react"
import Content from "./Content";


export default function Writing() {
  const [data, setData] = useState([ ]);

  useEffect(
     () => {
      // repo list content
      const url = 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts';
      fetch(url)
        .then(resp => resp.json())
        .then(resp => resp.map(obj => obj.download_url))// raw data url // needs to check if null or not
        .then(posts => getPosts(posts))

        const getPosts = async (posts) => {
          const responses =  await Promise.all( posts.map( obj => { return fetch( obj ); } ) );
          const filteredResponses = responses.filter( resp => resp.status === 200);
          const results = await Promise.all( filteredResponses.map( obj => obj.text()) )
          console.log(results)
        }

},[ ])



  return (
    <section className="technical writing">
      <h2>Technical Writing</h2>
      {Content}
    </section>
    )


}
