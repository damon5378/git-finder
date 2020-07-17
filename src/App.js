import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";
import User from "./components/users/User";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";

const App = () => {
 

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

  // const getUserRepos = async (username) => {
  //   setLoading(true);

  //   const response = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setRepos(response.data);
  //   setLoading(false);
  // }


  // removeAlert = () => {
  //   this.setState({
  //     alert: null
  //   })
  // }

    return (
      <GithubState>
      <AlertState>
        <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/git-finder' component={Home} />
              <Route exact path='/git-finder/about' component={About} />
              <Route exact path='/git-finder/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
        </AlertState>
        </GithubState>
    );
}

export default App;
