import Loader from "react-loader-spinner";
import React from 'react';

import './App.css';
import './reset.css';


import ErrorAlert from './components/ErrorAlert/Error.js';

import Repo from './components/Repo/Repo.js';
import SearchBar from './components/Search/Search.js';
import UserInfo from './components/UserInfo/UserInfo.js';



class Container extends React.Component {
  state = {
    hideUser: true,
    hideError: true,
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
          repos: []
        }
      );
    }
    
  }

  startedSearch = () => {
    this.setState(
      {
        info: {},
        hideUser: true,
        hideError: true,
        repos: []
      }
    );
  }
  render() {
      return (
        <div className="App">
          {/* <div class="overlay"></div>
          <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          className = "hightlight"
        /> */}
          <ErrorAlert hideError = { this.state.hideError } />
          <SearchBar updateList = { this.updateList } startedSearch = { this.startedSearch }/>
          <UserInfo hideUser = { this.state.hideUser } info = { this.state.info }/>
          <Repo repos = { this.state.repos } />
      </div>
      );
  }
}

function App() {
  return <Container />
}

export default App;
