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
import GithubState from './context/github/GithubState';

const App = () => {
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


  // Get users repos

  const getUserRepos = async (username) => {
    setLoading(true);

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(response.data);
    setLoading(false);
  }


  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout( () => setAlert(null), 5000);
  };

  // removeAlert = () => {
  //   this.setState({
  //     alert: null
  //   })
  // }

    return (
      <GithubState>
        <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/git-finder' render={props => (
                <Fragment>
                <Search
                  // clearUsers={clearUsers}
                  // showClear={showClear}
                  showAlert={showAlert}
              />
              <Users />
                </Fragment>
              )} />
              <Route exact path='/git-finder/about' component={About} />
              <Route exact path='/git-finder/user/:login' render={props => (
                <User 
                  {...props}  
                  getUserRepos={getUserRepos} 
                  repos={repos} />
              )} />
            </Switch>
          </div>
        </div>
        </Router>
        </GithubState>
    );
}

export default App;
