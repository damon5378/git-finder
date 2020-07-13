import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';

class App extends React.Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

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

  searchUsers = async (text) => {

    this.setState({
      loading: true
    })

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: response.data.items,
      loading: false
    })
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }, 
    })
    setTimeout( () => this.setState({ 
      alert: null 
    }), 5000)
  }

  // removeAlert = () => {
  //   this.setState({ 
  //     alert: null
  //   })
  // }

  

  render() {

    let showClear = this.state.users.length > 0 ? true : false

    return (
    <div className="App">
    <Navbar title="Github Finder" icon="fab fa-github"/>
    <div className="container">
    <Alert alert={this.state.alert} removeAlert={this.removeAlert}/>
      <Search 
        searchUsers={this.searchUsers} 
        clearUsers={this.clearUsers} 
        showClear={showClear}
        setAlert={this.setAlert}/>
      <Users loading={this.state.loading} users={this.state.users} />
    </div>
    
    </div>
  );
  }
}

export default App;
