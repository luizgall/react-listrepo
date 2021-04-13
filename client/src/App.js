import Loader from "react-loader-spinner";
import React from 'react';

import './App.css';
import './reset.css';

import SearchBar from './components/Search/Search.js';
import UserInfo from './components/UserInfo/UserInfo.js';
import Repo from './components/Repo/Repo.js';


class Container extends React.Component {
  state = {
    hideUser: true,
    info: {

    },
    repos: []
  };
  updateList = (data) => {
    this.setState(
      {
        info: data,
        hideUser: false,
        repos: data.repos
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
          <SearchBar hideUser = { this.state.hideUser } updateList = { this.updateList }/>
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
