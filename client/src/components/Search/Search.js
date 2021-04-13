import React from 'react';
import { ApiService }  from '../../services/ApiService';
import './Search.css';

export default class SearchBar extends React.Component {

  user = "";
  handleSubmit = (event) => {
    event.preventDefault();
    this.searchRepo();
    
  }

  handleChange = (event) => {
    this.user = event.target.value;
  }

  
  searchRepo = () => {
    this.props.startedSearch();
    let user= this.user;
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
      <input type="text" onChange = {this.handleChange}/>
      <button type = "submit" >Search</button>
    </form>
    );
  }
}