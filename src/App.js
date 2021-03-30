import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook/AddBook';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
