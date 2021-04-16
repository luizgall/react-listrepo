import React from 'react';
import './Repo.css';
import { ApiService }  from '../../services/ApiService';
import StarIcon from '../Icons/Star/Star.js'
export default class SearchBar extends React.Component {

  starClicked = (repos) => {
    if (!repos.starred) {
        let promise = ApiService.starRepo(repos.name, repos.owner);
        promise.then((res) => {
          this.props.updateStar(repos.name, true);
       });

    }
    else {
      let promise = ApiService.deleteStar(repos.name, repos.owner);
        promise.then((res) => {
          repos.starred = false;
          this.props.updateStar(repos.name, false);
       });
    }
  }

  render() {
    return (
    <ul className = "repo">
     { this.props.repos.map(repos => 
     <li key={repos.name}> 
       <hr /> 
       <h1 className = "float-left"> <b> Repository name: </b> {repos.name} <StarIcon starred = {repos.starred} callback = {() => {this.starClicked(repos)}}className="float-right" />  </h1> 
       <p className = "float-left"> <b>Description: </b> {repos.description || '-'} </p> 
       <p className = "float-left"> <b>Clone: </b> {repos.cloneUrl}  </p>
       <p className = "float-left"> <b>SSH: </b> {repos.sshUrl} </p>
       <p className = "float-right"> <b>Language: </b>{repos.language || '-'} </p> 
       <p className = "float-right"> <b>Created at: </b>{repos.creationDate} </p>  
       <p className = "float-right"> <b>Last Update: </b> {repos.lastUpdate} </p>   

      </li>)
     }
    </ul>
    );
  }
}