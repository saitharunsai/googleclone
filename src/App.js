import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/all">
            <SearchPage />
          </Route>
          <Route path="/news">
            <SearchPage />
          </Route>
          <Route path="/images">
            <SearchPage />
          </Route>
          <Route path="/shopping">
            <SearchPage />
          </Route>
          <Route path="/maps">
            <SearchPage />
          </Route>
          <Route path="/more">
            <SearchPage />
          </Route>
          <Route path="/settings">
            <SearchPage />
          </Route>
          <Route path="/tools">
            <SearchPage />
          </Route>
          {/* This is the default route, */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;