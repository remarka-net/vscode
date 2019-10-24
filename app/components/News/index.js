import React from 'react';

function News(props) {
    return (       
    <div className = "container_News_item">
        <div className = "newsBlock">
            <h1>{props.mainHeader}</h1>
            <date>{props.date}</date>
            <p>{props.content}</p>
            <div className = "container_Read">
                <a href = "#">{props.readMore}</a>
            </div>
        </div>
    </div>
    );
  }
  
export default News;