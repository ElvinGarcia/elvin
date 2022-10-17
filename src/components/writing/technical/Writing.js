import React, { useEffect, useState } from "react"
// import Content from "./Content";


export default function Writing() {
  const [data, setData] = useState([ ]);

  useEffect(
     () => {
      // repo list content
      const url = 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts';
      // const url = '';
      fetch(url)
        .then(resp => resp.json())
        .then(resp => resp.map(obj => obj.download_url))// raw data url // needs to check if null or not
        .then(posts => getPosts(posts));

        const getPosts = async (posts) => {
          const responses =  await Promise.all( posts.map( obj => { return fetch( obj ); } ) );
          const filteredResponses = responses.filter( resp => resp.status === 200);
          const results = await Promise.all(filteredResponses.map(obj => obj.text()));
          parsePost(results)
        }

        const parsePost = (posts) =>{
          const listOfPosts = posts.map(doc => {
            const post = {}
            // creates array spliting header and content
            const content = doc.split("---\n")[2];
            // creates array spliting header and content
            const header = doc.split("---\n")[1];
            // filters out any unwanted characters from the header
            const filteredHeader = header.split("\n").filter(a => a !== false);
            // created object attributes based on the header content and adds it to the main object
            filteredHeader.forEach(att => { att.split(': ').reduce((prev, curr) => (post[prev] = curr)) });
            // puts the content on to  the post object
            post["content"] = content;
            return post;
          }
          );
          setData(listOfPosts)
          }

    }, [])

  console.log("Array of OBJECTS",data)



  return (
    <section className="technical writing">
      <h2>Technical Writing</h2>
      {/* {Content} */}
    </section>
    )


}
