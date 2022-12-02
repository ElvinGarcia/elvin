import React,{useState, useEffect} from "react";
import ContentList from "./ContentList";


import Accordion from 'react-bootstrap/Accordion';



export default function TechnicalWriting(){

const [data, setData] = useState([]);

  useEffect(
    () => {
      // repo list content
      const url = `${process.env.REACT_APP_POSTS_LOCATION}`;
      fetch(url)
        .then(resp => resp.json())
        .then(resp => resp.map(obj => obj.download_url))// raw data url // needs to check if null or not
        .then(posts => getPosts(posts)).catch(e => console.log("an error occured ,",e.message));

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

    },[])


  const contentList = data.map((obj, i) => <ContentList eventKey={i} {...obj} key={i+Math.random()}   />);


  return (
    <>
    <Accordion className={"technical writing list"} >
        {contentList}
    </Accordion>
      {/* <AllCollapseExample/> */}
        {/* <Accordion.Item eventKey="0">
          <div className="technical writing list">
            <h2 className=" technical writing title">Technical Writing</h2>
            {contentList}
          </div>
        </Accordion.Item> */}



  </>
    )


}

