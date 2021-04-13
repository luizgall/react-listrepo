import React from 'react';
import './Loader.css';

export default class ErrorAlert extends React.Component {

  render() {
    return (
      <div className = { this.props.hideLoader ? 'hidden' : ''}>
        <div class="overlay"></div>
        <div class="loader"></div>
      </div>
    );
  }
}