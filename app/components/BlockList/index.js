import React from 'react';


function BlockList(props) {
    return (
    <div className = "container_item">     
        <p className = "center_level">{props.center_level}</p>
        <p className = "numberName">{props.numberName}</p>
        <p className = "boldName">{props.boldName}</p>
    </div>);
  }
  
export default BlockList;