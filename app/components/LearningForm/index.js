import React from 'react';


function LearningForm(props) {
    return (
    <div className = "container_item_form">
        <p className = "numberName">{props.numberName}</p>
        <p className = "boldName">{props.boldName}</p>
    </div>
    );
  }
  
export default LearningForm;