import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink} from "apollo-upload-client";
// eslint-disable-next-line
import {onError} from "@apollo/client/link/error";

/*const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
}); */
const uploadLink = createUploadLink({
    uri: 'https://localhost:8000/graphql',
    //uri: 'https://my-app-123.jelastic.metropolia.fi/graphql'
})
// eslint-disable-next-line
const errorLink = onError(({ graphqlErrors, networkError}) => {
    if(graphqlErrors) {
        // eslint-disable-next-line array-callback-return
        graphqlErrors.map(({message, location, path}) => {
            alert(`Graphql error ${message}`);
        })
    }
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('Token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
  //  uri: 'http://localhost:3000/graphql',
    link: authLink.concat(uploadLink),

    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
