import React from 'react';
import ReadMore from '../ReadMore/index'

function InformationSlider(props) {
    return (
    <div className = "container_information_slider">
        <h1>{props.mainHeader}</h1>
        <h2>{props.header}</h2>
        <p>{props.content}</p>
        <ReadMore readMore = "Читати докладніше"/>
    </div>);
  }
  
export default InformationSlider;