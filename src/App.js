import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout'




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<p>~~Nothing to see here ~~</p> }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
