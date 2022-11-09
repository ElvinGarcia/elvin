import React,{useState, useEffect} from "react";
import ContentList from "./ContentList";
import Content from "./Content";

// Framer-motion
import { motion } from "framer-motion"


export default function TechnicalWriting(){


const [contentData, setContentData] = useState({ toggle: false, post: "", });
const [data, setData] = useState([]);

  useEffect(
     () => {
      // repo list content
      const url = 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts';
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


  const handleContent = (obj) => { setContentData(() => ({ ...contentData, post: obj }));}


  const contentList = data.map(obj => <ContentList key={obj.date} {...obj} handleContent={ handleContent } />);


  return (
  <>
      <motion.section className="technical writing list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration:3, direction:"linear"  }}
      >
    <h2 className=" technical writing title">Technical Writing</h2>
     {contentList}
   </motion.section>
      <Content {...contentData} key={contentData.post.date} />
  </>
    )


}

