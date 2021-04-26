import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CategoryMenu from "./components/CategoryMenu";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {

  const [currentPage, handlePageChange] = useState("Home");

const renderPage = () => {
  switch (currentPage) {
    case "About":
      return <About />;
    case "Login":
      return <Login />;
    case "Home":
      return <Home />;
    case "Signup":
      return <Signup />;
  }
};


  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <nav>
              <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />

              <div>{renderPage()}</div>
            </nav>
            <Switch>
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
