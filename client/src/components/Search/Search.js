import React from 'react';
import { ApiService }  from '../../services/ApiService';
import './Search.css';

export default class SearchBar extends React.Component {

  state = {
    userName: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchRepo();
    
  }

  
  searchRepo = () => {
    let user=  "luizgall";
    if(user){
      let promise = ApiService.searchUser(user);
      promise.then((res) => {
        this.setState({repos: res.data.repos});
        this.props.updateList(res.data);
      })
    }
  }

  
  render() {
    return (
    <form className="searchBar" onSubmit={this.handleSubmit}>
      <input type="text" />
      <button type = "submit" >Search</button>
    </form>
    );
  }
}