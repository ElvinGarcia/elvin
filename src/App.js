import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout';
import Projects from './components/projects/Projects';
import Main from './components/main/Main';
import Writing from './components/writing/Writings';
import Resume from './components/resume/Resume';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Writing" element={<Writing/> }/>
          <Route path="/Resume" element={<Resume />}/>
        <Route path="*" element={<h1>~~Nothing to see here ~~</h1> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
