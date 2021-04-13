import React from 'react';
import './Repo.css';
export default class SearchBar extends React.Component {

  render() {
    return (
    <ul className = "repo">
     { this.props.repos.map(repos => 
     <li>
       <hr />
       <h1 class = "float-left"> <b> Repository name: </b> {repos.name} </h1> 
       <p class = "float-left"> <b>Description: </b> {repos.description || '-'} </p> 
       <p class = "float-left"> <b>Clone: </b> {repos.cloneUrl}  </p>
       <p class = "float-left"> <b>SSH: </b> {repos.sshUrl} </p>
       <p class = "float-right"> <b>Language: </b>{repos.language || '-'} </p> 
       <p class = "float-right"> <b>Created at: </b>{repos.creationDate} </p>  
       <p class = "float-right"> <b>Last Update: </b> {repos.lastUpdate} </p>   

      </li>) 
     }
    </ul>
    );
  }
}