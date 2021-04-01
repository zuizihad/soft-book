import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook/AddBook';
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import ManageBook from "./components/ManageBook/ManageBook";
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/admin/manageBook">
            <ManageBook></ManageBook>
          </Route>
          <PrivateRoute path="/admin/addBook">
            <AddBook></AddBook>
          </PrivateRoute>
          <Route path="/checkout/:id">
            <Checkout></Checkout>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
