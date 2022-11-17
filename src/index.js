import React from 'react';
import { createRoot } from 'react-dom/client'; // replaces ReactDOM.render
import { BrowserRouter } from 'react-router-dom'; // use for routing
import { ApolloProvider, ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import github from './db';
import App from './App';
import "./index.css";

console.log("process.env.REACT_APP_NOT_SECRET_CODE", process.env.REACT_APP_NOT_SECRET_CODE)
console.log("process.env.NODE_ENV", process.env.NODE_ENV)

const link = createHttpLink({
  // uri: github.baseURL,
  // credentials:"omit",  //its okay to use CORS
  // headers: {
  //   ...github.headers
  // },
  });

const client = new ApolloClient({
  // cache: new InMemoryCache(),
  // link
});


// returns an object with a render function
const root = createRoot(document.querySelector('#root'));

root.render(
    <BrowserRouter >
      <ApolloProvider  client={client} >
        <App/>
        </ApolloProvider>
    </BrowserRouter>
  )
