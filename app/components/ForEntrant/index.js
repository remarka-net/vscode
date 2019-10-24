import React from 'react';

function ForEnterer(props) {
    return (
    <div className = "container_item">
        {/* <Img src={image7}  className = 'image2'/> */}
        <p className = "boldName">{props.boldName}</p>
        <p className = "numberName">{props.numberName}</p>
    </div>);
  }
  
export default ForEnterer;