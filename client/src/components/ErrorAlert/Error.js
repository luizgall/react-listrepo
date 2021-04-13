import React from 'react';
import './Error.css';

export default class ErrorAlert extends React.Component {

  render() {
    let hidden = this.props.hideError ? 'hidden' : ''
    let classes = `error-alert ${hidden}`;
    return (
    
      <section className={classes}>
        <p> Username not found! </p>
    </section>
     
    );
  }
}