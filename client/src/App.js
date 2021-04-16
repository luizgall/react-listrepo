import React from 'react';

import './App.css';
import './reset.css';


import ErrorAlert from './components/ErrorAlert/Error.js';
import Loader from './components/Loader/Loader.js';
import Repo from './components/Repo/Repo.js';
import SearchBar from './components/Search/Search.js';
import UserInfo from './components/UserInfo/UserInfo.js';



class Container extends React.Component {
  state = {
    hideUser: true,
    hideError: true,
    hideLoader: true,
    info: {

    },
    repos: []
  };
  updateList = (data) => {
    if (data.repos && data.repos.length > 0){
      this.setState(
        {
          info: data,
          hideUser: false,
          hideError: true,
          hideLoader: true,
          repos: data.repos
        }
      );
    }
    else {
      this.setState(
        {
          info: {},
          hideUser: true,
          hideError: false,
          hideLoader: true,
          repos: []
        }
      );
    }
    
  }

  updateStar = (rep, star) => {
    let array = this.state.repos;
    console.log(rep, star);
    array.forEach (elem => {
      if (elem.name === rep){
        console.log("match");
        elem.starred = star;
      }
    });
      this.setState({
        repos: array
      }
    )
    console.log(this.state)
  }

  startedSearch = () => {
    this.setState(
      {
        info: {},
        hideUser: true,
        hideError: true,
        hideLoader: false,
        repos: []
      }
    );
  }
  render() {
      return (
        <div className="App">
          <Loader hideLoader = { this.state.hideLoader }/>
          <ErrorAlert hideError = { this.state.hideError } />
          <SearchBar updateList = { this.updateList } startedSearch = { this.startedSearch }/>
          <UserInfo hideUser = { this.state.hideUser } info = { this.state.info }/>
          <Repo repos = { this.state.repos } updateStar = { this.updateStar } />
      </div>
      );
  }
}

function App() {
  return <Container />
}

export default App;
