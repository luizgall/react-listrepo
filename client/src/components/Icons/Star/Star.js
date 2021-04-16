import React from 'react';
import './Star.css';
export default class StarIcon extends React.Component {

  repoName = this.props.repoName;

  constructor(props){
    super(props);
    this.starClick = this.starClick.bind(this);
}
  starClick = () => {
    this.props.callback();
  }

  render() {
    let selected = this.props.starred ? 'selected' : '';

    return (
    <span className = {this.props.className + ' icon-star ' + selected}>
    <svg onClick = {this.starClick} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    </span>
    );
  }
}