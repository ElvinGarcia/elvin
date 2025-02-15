import React,{} from 'react';
import { Routes, Route } from "react-router-dom";
// components
  import Layout from './containers/Layout';
  import Projects from './components/projects/Projects';
  import Main from './components/main/Main';
  import Writing from './components/writing/Writings';
  import Resume from './components/resume/Resume';
  // import Welcome from './components/splash_screen/Welcome';
  import Contact from './components/main/contact/Contact';
// apollo and graphQl
  import { useQuery, gql } from "@apollo/client";
  import { githubProfile} from './queries/github';
import UserData from "./siteData/UserData";




function App() {
  const ProfileInfo = gql`${githubProfile.query} `;
  const { loading, error, data } = useQuery(ProfileInfo);
  loading && console.log("fetching ProfileInfo.... 🐕");
  error && console.log("An error occured:", error);


  return (

<UserData.Provider value={data}>
<Routes>
  {/* Uncomment if you want to use Welcome component */}
  {/* <Route index element={<Welcome />} /> */}
  <Route path="/" element={<Layout />}>
    <Route index element={<Main />} />
    <Route path="/about-me" element={<Main />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/writing" element={<Writing />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<h1>~~ Nothing to see here ~~</h1>} />
  </Route>
</Routes>
</UserData.Provider>


  );
}

export default App;
