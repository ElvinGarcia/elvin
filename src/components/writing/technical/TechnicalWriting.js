import React,{useState} from "react";
import ContentList from "./ContentList";
import Content from "./Content";




export default function TechnicalWriting(){


  //  data = [{},{}]
  const data = [
    {
      title: "sample",
    "layout": "post",
    "date": "'2016-11-03T20:50:00.001-07:00'",
    "author": "EG",
    "tags": "[]",
    "modified_time": '2018-71-23T20:52:16.529-02:01',
    "blogger_id": "tag:blogger.com,1999:blog-4347820558803353276.post-5922369531838206430",
    "blogger_orig_url": "http://blog.elvingarcia.com/2016/11/what-coding-is-all-about.html",
      content: `\n
# Table of Content \n
## [Prototype-base Programming](#prototype-base-programming) \n
## [Interpreted Language](#interpreted-language) \n
<hr>
      `
    },
    {
    "title": "About Coding",
    "layout": "post",
    "date": '2016-11-03T20:50:00.001-07:00',
    "author": "EG",
    "tags": "[]",
    "modified_time": "'2016-11-03T20:59:16.599-07:00'",
    "blogger_id": "tag:blogger.com,1999:blog-4347820558803353276.post-5922369531838206431",
    "blogger_orig_url": "http://blog.elvingarcia.com/2016/11/what-coding-is-all-about.html",
    "content": "\nLife is good, until you want better.  Before enter a coding bootcamp I was given the typical advised and warnings before starting such as \"prepare for a difficult journey\" and such. They all have a place and time why they are consistently told. But while going through the process I learned that its difficult because it helps build character and resilience. These and many more that could many coders could agree upon are what makes the entire process from inception to developer so life changing.   Smile Eat Sleep and Code.\n"
  },
  {
    "layout": "post",
    "title": "One building Block at a time",
    "date": "'2016-11-04T11:18:00.005-07:00'",
    "author": "EG",
    "tags": "",
    "modified_time": "2016-11-04T11:21:25.032-07:00",
    "blogger_id": "tag:blogger.com,1999:blog-4347820558803353276.post-452249001107208178",
    "blogger_orig_url": "http://blog.elvingarcia.com/2016/11/one-building-block-at-time.html",
    "content": "\n<br />At the very core of every programmer lays an indispensable skill that is hard to quantify or expressed in few words. That skill is within the ability to read, write and learn at the consistent pace of that which mimics technology, which is constantly.<br />The best way I approach this requirement is by first choosing a technology or language of interest. Being interested in what you choose is very important since it is whats going to keep you motivated when your spirits are down and there is no way out.<br />The second part is to dissect the subject matter into its most basic component and learn that very very well. Similar to math in elementary. You fist learn to count and the logic behind counting up to 10. Using the knowledge gain from learning the basics will help you master the next level of mastery in the subject field making the entire process a catapult effect. Mean while practicing every step of the way what was learn in order to solidify the retention of the knowledge gained.<br /><br />This is just my simple way of learning and mastery new subjects.<br /><br />"
  }
]



  // useEffect(
  //    () => {
  //     // repo list content
  //     const url = 'https://api.github.com/repositories/95937718/contents/technical_blog/_posts';
  //     // const url = '';
  //     fetch(url)
  //       .then(resp => resp.json())
  //       .then(resp => resp.map(obj => obj.download_url))// raw data url // needs to check if null or not
  //       .then(posts => getPosts(posts)).catch(e => console.log("an error occured ,",e.message));

  //       const getPosts = async (posts) => {
  //         const responses =  await Promise.all( posts.map( obj => { return fetch( obj ); } ) );
  //         const filteredResponses = responses.filter( resp => resp.status === 200);
  //         const results = await Promise.all(filteredResponses.map(obj => obj.text()));
  //         parsePost(results)
  //       }

  //       const parsePost = (posts) =>{
  //         const listOfPosts = posts.map(doc => {
  //           const post = {}
  //           // creates array spliting header and content
  //           const content = doc.split("---\n")[2];
  //           // creates array spliting header and content
  //           const header = doc.split("---\n")[1];
  //           // filters out any unwanted characters from the header
  //           const filteredHeader = header.split("\n").filter(a => a !== false);
  //           // created object attributes based on the header content and adds it to the main object
  //           filteredHeader.forEach(att => { att.split(': ').reduce((prev, curr) => (post[prev] = curr)) });
  //           // puts the content on to  the post object
  //           post["content"] = content;
  //           return post;
  //         }
  //         );
  //         setData(listOfPosts)
  //         }

  //   },)

  const [contentData, setContentData] = useState( { toggle: false, data: "", });


  const handleContent = (obj) => {
    setContentData(() => ({ ...contentData, data: obj }));
}


  const contentList = data.map(
    obj => <ContentList key={obj.date} {...obj} handleContent={ handleContent } />
  );


  return (
    <>
   <section className="technical writing list">
    <h2>Technical Writing</h2>
        {contentList}
      </section>
      <Content {...contentData} />
  </>
    )


}

