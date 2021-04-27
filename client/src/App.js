import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Success from './components/Success';



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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/success" component={Success} />
            </Switch>
            <Cart />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
