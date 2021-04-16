import React from 'react';
import './UserInfo.css';

export default class UserInfo extends React.Component {

  render() {
    let hidden = this.props.hideUser ? 'hidden' : ''
    let classes = `user-info ${hidden}`;
    return (
    
      <section className={classes}>
        <img src = {this.props.info.userAvatar} alt = "User avatar"/>
        <div>
          <span><b>User name:</b> {this.props.info.userName}</span>
          <span><b>User profile: </b><a href={this.props.info.userProfile} target="_blank">{this.props.info.userProfile}</a></span>
          <span><b>Number of projects:</b> {this.props.info.repoQuantity}</span> 
        </div>
    </section>
     
    );
  }
}