import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout'




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Writing" element={"under construction" }/>
          <Route path="/Speaking" element={"under construction" }/>
          <Route path="/Projecta" element={"under construction" }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
