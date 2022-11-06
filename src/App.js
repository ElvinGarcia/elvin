import React,{} from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout';
import Projects from './components/projects/Projects';
import Main from './components/main/Main';
import Writing from './components/writing/Writings';
import Resume from './components/resume/Resume';
import Welcome from './components/splash_screen/Welcome';
import Contact from './components/main/contact/Contact';



import { useQuery, gql } from "@apollo/client";
import { githubProfile } from './queries/github';
import UserData from "./siteData/UserData";


function App() {
  const ProfileInfo = gql`${githubProfile.query} `;
  const { loading, error, data } = useQuery(ProfileInfo);
  loading && console.log("fetching .... 🐕");
  error && console.log("An error occured:", error);



  return (
    <UserData.Provider value={data}>
      <Routes>
          <Route index element={<Welcome/>}/>
        <Route path="/" element={<Layout />}>
          <Route path="/About_me" element={<Main/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Writing" element={<Writing/> }/>
          <Route path="/Resume" element={<Resume />}/>
          <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<h1>~~Nothing to see here ~~</h1> }/>
        </Route>
      </Routes>
    </UserData.Provider>
  );
}

export default App;
