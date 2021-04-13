import React from 'react';
import axios from 'axios';

export default class SearchBar extends React.Component {

  state = {
    repos: [],
    userName: ""
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchRepo();
    
  }

  

  searchRepo (){
    if(this.state.userName){
      axios.get(`http://localhost:3001/search?user=${this.state.userName}`)
      .then(res => {
        const repos = res.data.repos;

        this.setState({repos: repos});
      })
    }
  }

  
  render() {
    return (
    <form className="searchBar" onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.userName} onChange={this.handleChange} />
      <button type = "submit" >search</button>
      <ul>
        { this.state.repos.map(repos => <li>{repos.name}</li>)}
      </ul>
    </form>
    );
  }
}