import React from 'react';
import './Loader.css';

export default class ErrorAlert extends React.Component {

  render() {
    return (
      <div className = { this.props.hideLoader ? 'hidden' : ''}>
        <div className="overlay"></div>
        <div className="loader"></div>
      </div>
    );
  }
}