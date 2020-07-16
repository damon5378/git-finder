import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";
import User from "./components/users/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);
 

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   })
  //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: response.data,
  //     loading: false
  //   })
  // }

  const searchUsers = async (text) => {
    setLoading(true);

    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(response.data.items);
    setLoading(false);
  };

  // Get single GitHub user

  const getUser = async (username) => {
    setLoading(false);

    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(response.data);
    setLoading(false);
  }

  // Get users repos

  const getUserRepos = async (username) => {
    setLoading(true);

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(response.data);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);

    // this.setState({
    //   users: [],
    //   loading: false,
    // });
  };

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout( () => setAlert(null), 5000);
  };

  // removeAlert = () => {
  //   this.setState({
  //     alert: null
  //   })
  // }

    let showClear = users.length > 0 ? true : false;

    return (
        <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/git-finder' render={props => (
                <Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={showClear}
                  showAlert={showAlert}
              />
              <Users
                loading={loading}
                users={users}
              />
                </Fragment>
              )} />
              <Route exact path='/git-finder/about' component={About} />
              <Route exact path='/git-finder/user/:login' render={props => (
                <User 
                  {...props} 
                  getUser={getUser} 
                  getUserRepos={getUserRepos} 
                  user={user} 
                  repos={repos}
                  loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
        </Router>
    );
}

export default App;
