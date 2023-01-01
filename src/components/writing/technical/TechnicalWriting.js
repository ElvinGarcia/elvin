import React,{useState, useEffect} from "react";
import ContentList from "./ContentList";




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

  const [clicked, setClicked] = useState("0")

  const handleClick = (i) => {
    if (clicked === i) {
      return setClicked("0");
    }
    setClicked(i);
  };


  const contentList = data.map((obj, i) => <ContentList
    eventKey={i}
    {...obj}
    key={i + Math.random()}
    onToggle={() => handleClick(i)}
    active={clicked === i}

  />);


  return (
    <>
    <div className={"technical writing list"} >
        {contentList}
    </div>
  </>
    )


}

