import React from 'react';

function Information(props) {
    return (
    <div className = "container_information">
        <h1>{props.mainHeader}</h1>
        <h2>{props.header}</h2>
        <p>{props.content}</p>
    </div>);
  }
  
export default Information;